import FreshStartNtoStarOtsKeywordPage, { generateMetadata } from './fresh-start-nto-star-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNtoStarOtsKeywordPage />;
}
