import HighExpSeasonPolandKeywordPage, { generateMetadata } from './high-exp-season-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpSeasonPolandKeywordPage />;
}
