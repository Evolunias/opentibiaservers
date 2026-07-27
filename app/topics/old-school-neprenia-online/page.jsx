import OldSchoolNepreniaOnlineKeywordPage, { generateMetadata } from './old-school-neprenia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNepreniaOnlineKeywordPage />;
}
