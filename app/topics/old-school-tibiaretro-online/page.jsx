import OldSchoolTibiaretroOnlineKeywordPage, { generateMetadata } from './old-school-tibiaretro-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaretroOnlineKeywordPage />;
}
