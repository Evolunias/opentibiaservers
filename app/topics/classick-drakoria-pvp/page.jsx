import ClassickDrakoriaPvpKeywordPage, { generateMetadata } from './classick-drakoria-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaPvpKeywordPage />;
}
