import ClassicusPvpKeywordPage, { generateMetadata } from './classicus-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusPvpKeywordPage />;
}
