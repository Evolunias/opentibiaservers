import FreshStartNtoStarClientKeywordPage, { generateMetadata } from './fresh-start-nto-star-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNtoStarClientKeywordPage />;
}
