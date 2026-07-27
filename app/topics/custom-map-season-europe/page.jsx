import CustomMapSeasonEuropeKeywordPage, { generateMetadata } from './custom-map-season-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapSeasonEuropeKeywordPage />;
}
