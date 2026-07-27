import OldSchoolBlazeraOnlineKeywordPage, { generateMetadata } from './old-school-blazera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolBlazeraOnlineKeywordPage />;
}
