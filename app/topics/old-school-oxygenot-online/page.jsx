import OldSchoolOxygenotOnlineKeywordPage, { generateMetadata } from './old-school-oxygenot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOxygenotOnlineKeywordPage />;
}
