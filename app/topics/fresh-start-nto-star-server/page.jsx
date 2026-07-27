import FreshStartNtoStarServerKeywordPage, { generateMetadata } from './fresh-start-nto-star-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNtoStarServerKeywordPage />;
}
