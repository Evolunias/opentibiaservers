import CustomShadowcoresOnlineKeywordPage, { generateMetadata } from './custom-shadowcores-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomShadowcoresOnlineKeywordPage />;
}
