import BaiakSeasonUkKeywordPage, { generateMetadata } from './baiak-season-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakSeasonUkKeywordPage />;
}
