import OldSchoolRealestaOnlineKeywordPage, { generateMetadata } from './old-school-realesta-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRealestaOnlineKeywordPage />;
}
