import NewMiracleWebsiteKeywordPage, { generateMetadata } from './new-miracle-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMiracleWebsiteKeywordPage />;
}
