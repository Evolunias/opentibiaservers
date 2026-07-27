import NewOxygenotWebsiteKeywordPage, { generateMetadata } from './new-oxygenot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOxygenotWebsiteKeywordPage />;
}
