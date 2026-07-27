import FreshStartNtoStarGuideKeywordPage, { generateMetadata } from './fresh-start-nto-star-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNtoStarGuideKeywordPage />;
}
