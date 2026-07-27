import LowrateMiracleWebsiteKeywordPage, { generateMetadata } from './lowrate-miracle-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMiracleWebsiteKeywordPage />;
}
