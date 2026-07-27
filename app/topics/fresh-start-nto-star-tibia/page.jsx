import FreshStartNtoStarTibiaKeywordPage, { generateMetadata } from './fresh-start-nto-star-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNtoStarTibiaKeywordPage />;
}
