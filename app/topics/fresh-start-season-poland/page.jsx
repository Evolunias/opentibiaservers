import FreshStartSeasonPolandKeywordPage, { generateMetadata } from './fresh-start-season-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartSeasonPolandKeywordPage />;
}
