import NewSeasonDuraOnlineOtsKeywordPage, { generateMetadata } from './new-season-dura-online-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonDuraOnlineOtsKeywordPage />;
}
