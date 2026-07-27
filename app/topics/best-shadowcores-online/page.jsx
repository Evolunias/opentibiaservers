import BestShadowcoresOnlineKeywordPage, { generateMetadata } from './best-shadowcores-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestShadowcoresOnlineKeywordPage />;
}
