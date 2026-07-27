import MiracleOfficialKeywordPage, { generateMetadata } from './miracle-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleOfficialKeywordPage />;
}
