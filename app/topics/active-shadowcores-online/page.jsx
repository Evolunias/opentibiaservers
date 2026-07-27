import ActiveShadowcoresOnlineKeywordPage, { generateMetadata } from './active-shadowcores-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveShadowcoresOnlineKeywordPage />;
}
