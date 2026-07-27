import OldSchoolEvoleraOnlineKeywordPage, { generateMetadata } from './old-school-evolera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoleraOnlineKeywordPage />;
}
