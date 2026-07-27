import OldSchoolShadowcoresOnlineKeywordPage, { generateMetadata } from './old-school-shadowcores-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolShadowcoresOnlineKeywordPage />;
}
