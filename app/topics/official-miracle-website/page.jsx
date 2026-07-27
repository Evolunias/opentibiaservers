import OfficialMiracleWebsiteKeywordPage, { generateMetadata } from './official-miracle-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMiracleWebsiteKeywordPage />;
}
