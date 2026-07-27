import TopShadowcoresOnlineKeywordPage, { generateMetadata } from './top-shadowcores-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopShadowcoresOnlineKeywordPage />;
}
