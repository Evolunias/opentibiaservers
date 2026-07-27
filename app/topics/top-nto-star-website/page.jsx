import TopNtoStarWebsiteKeywordPage, { generateMetadata } from './top-nto-star-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNtoStarWebsiteKeywordPage />;
}
