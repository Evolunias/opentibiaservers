import BaiakSeasonSwedenKeywordPage, { generateMetadata } from './baiak-season-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakSeasonSwedenKeywordPage />;
}
