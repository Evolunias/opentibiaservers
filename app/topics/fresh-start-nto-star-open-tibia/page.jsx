import FreshStartNtoStarOpenTibiaKeywordPage, { generateMetadata } from './fresh-start-nto-star-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNtoStarOpenTibiaKeywordPage />;
}
