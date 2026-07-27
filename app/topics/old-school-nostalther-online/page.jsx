import OldSchoolNostaltherOnlineKeywordPage, { generateMetadata } from './old-school-nostalther-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNostaltherOnlineKeywordPage />;
}
