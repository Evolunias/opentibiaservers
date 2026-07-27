import LowExpSeasonEuropeKeywordPage, { generateMetadata } from './low-exp-season-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpSeasonEuropeKeywordPage />;
}
