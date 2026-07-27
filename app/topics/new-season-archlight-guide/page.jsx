import NewSeasonArchlightGuideKeywordPage, { generateMetadata } from './new-season-archlight-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonArchlightGuideKeywordPage />;
}
