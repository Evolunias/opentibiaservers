import PopularShadowcoresOnlineKeywordPage, { generateMetadata } from './popular-shadowcores-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularShadowcoresOnlineKeywordPage />;
}
