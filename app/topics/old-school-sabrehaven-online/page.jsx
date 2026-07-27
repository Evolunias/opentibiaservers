import OldSchoolSabrehavenOnlineKeywordPage, { generateMetadata } from './old-school-sabrehaven-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSabrehavenOnlineKeywordPage />;
}
