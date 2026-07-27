import ClassicusPvpServerUkKeywordPage, { generateMetadata } from './classicus-pvp-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusPvpServerUkKeywordPage />;
}
