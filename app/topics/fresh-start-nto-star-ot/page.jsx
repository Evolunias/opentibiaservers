import FreshStartNtoStarOtKeywordPage, { generateMetadata } from './fresh-start-nto-star-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNtoStarOtKeywordPage />;
}
