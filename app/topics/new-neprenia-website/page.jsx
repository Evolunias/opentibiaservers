import NewNepreniaWebsiteKeywordPage, { generateMetadata } from './new-neprenia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNepreniaWebsiteKeywordPage />;
}
