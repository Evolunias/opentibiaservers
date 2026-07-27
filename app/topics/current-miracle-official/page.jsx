import CurrentMiracleOfficialKeywordPage, { generateMetadata } from './current-miracle-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMiracleOfficialKeywordPage />;
}
