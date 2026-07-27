import HighrateMiracleWebsiteKeywordPage, { generateMetadata } from './highrate-miracle-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMiracleWebsiteKeywordPage />;
}
