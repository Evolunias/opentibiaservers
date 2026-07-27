import NewShadowcoresOnlineKeywordPage, { generateMetadata } from './new-shadowcores-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewShadowcoresOnlineKeywordPage />;
}
