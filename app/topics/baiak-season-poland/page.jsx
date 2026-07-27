import BaiakSeasonPolandKeywordPage, { generateMetadata } from './baiak-season-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakSeasonPolandKeywordPage />;
}
