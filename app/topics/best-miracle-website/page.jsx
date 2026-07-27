import BestMiracleWebsiteKeywordPage, { generateMetadata } from './best-miracle-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMiracleWebsiteKeywordPage />;
}
