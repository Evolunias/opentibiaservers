import NewSeasonDuraOnlineGuideKeywordPage, { generateMetadata } from './new-season-dura-online-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonDuraOnlineGuideKeywordPage />;
}
