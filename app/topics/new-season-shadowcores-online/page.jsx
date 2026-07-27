import NewSeasonShadowcoresOnlineKeywordPage, { generateMetadata } from './new-season-shadowcores-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonShadowcoresOnlineKeywordPage />;
}
