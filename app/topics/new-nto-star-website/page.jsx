import NewNtoStarWebsiteKeywordPage, { generateMetadata } from './new-nto-star-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNtoStarWebsiteKeywordPage />;
}
