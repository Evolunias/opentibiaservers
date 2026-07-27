import CurrentMiracleWebsiteKeywordPage, { generateMetadata } from './current-miracle-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMiracleWebsiteKeywordPage />;
}
