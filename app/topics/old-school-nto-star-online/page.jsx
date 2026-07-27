import OldSchoolNtoStarOnlineKeywordPage, { generateMetadata } from './old-school-nto-star-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNtoStarOnlineKeywordPage />;
}
