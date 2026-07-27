import HighrateShadowcoresOnlineKeywordPage, { generateMetadata } from './highrate-shadowcores-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateShadowcoresOnlineKeywordPage />;
}
