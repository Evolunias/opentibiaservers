import OldSchoolArchlightOnlineKeywordPage, { generateMetadata } from './old-school-archlight-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolArchlightOnlineKeywordPage />;
}
