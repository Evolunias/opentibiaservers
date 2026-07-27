import NewSeasonDuraOnlineClientKeywordPage, { generateMetadata } from './new-season-dura-online-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonDuraOnlineClientKeywordPage />;
}
