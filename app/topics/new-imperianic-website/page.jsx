import NewImperianicWebsiteKeywordPage, { generateMetadata } from './new-imperianic-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewImperianicWebsiteKeywordPage />;
}
