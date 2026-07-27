import BaiakSeasonGermanyKeywordPage, { generateMetadata } from './baiak-season-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakSeasonGermanyKeywordPage />;
}
