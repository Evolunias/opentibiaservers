import ShadowcoresOnlineKeywordPage, { generateMetadata } from './shadowcores-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresOnlineKeywordPage />;
}
