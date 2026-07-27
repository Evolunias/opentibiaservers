import OldSchoolDuraOnlineKeywordPage, { generateMetadata } from './old-school-dura-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDuraOnlineKeywordPage />;
}
