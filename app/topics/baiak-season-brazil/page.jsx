import BaiakSeasonBrazilKeywordPage, { generateMetadata } from './baiak-season-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakSeasonBrazilKeywordPage />;
}
