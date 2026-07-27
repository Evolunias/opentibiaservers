import OldSchoolRealeraOnlineKeywordPage, { generateMetadata } from './old-school-realera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRealeraOnlineKeywordPage />;
}
