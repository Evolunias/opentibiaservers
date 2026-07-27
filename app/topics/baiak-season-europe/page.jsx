import BaiakSeasonEuropeKeywordPage, { generateMetadata } from './baiak-season-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakSeasonEuropeKeywordPage />;
}
