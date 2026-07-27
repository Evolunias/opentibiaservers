import NtoStarWebsiteKeywordPage, { generateMetadata } from './nto-star-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarWebsiteKeywordPage />;
}
