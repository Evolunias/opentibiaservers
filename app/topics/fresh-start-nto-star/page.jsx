import FreshStartNtoStarKeywordPage, { generateMetadata } from './fresh-start-nto-star';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNtoStarKeywordPage />;
}
