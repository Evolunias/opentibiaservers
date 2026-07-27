import CurrentShadowcoresOnlineKeywordPage, { generateMetadata } from './current-shadowcores-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentShadowcoresOnlineKeywordPage />;
}
