import NoResetShadowcoresOnlineKeywordPage, { generateMetadata } from './no-reset-shadowcores-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetShadowcoresOnlineKeywordPage />;
}
