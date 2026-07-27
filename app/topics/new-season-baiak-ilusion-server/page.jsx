import NewSeasonBaiakIlusionServerKeywordPage, { generateMetadata } from './new-season-baiak-ilusion-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonBaiakIlusionServerKeywordPage />;
}
