import HighExpSeasonEuropeKeywordPage, { generateMetadata } from './high-exp-season-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpSeasonEuropeKeywordPage />;
}
