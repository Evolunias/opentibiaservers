import NewSeasonBaiakIlusionKeywordPage, { generateMetadata } from './new-season-baiak-ilusion';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonBaiakIlusionKeywordPage />;
}
