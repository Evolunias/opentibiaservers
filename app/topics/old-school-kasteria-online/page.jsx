import OldSchoolKasteriaOnlineKeywordPage, { generateMetadata } from './old-school-kasteria-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolKasteriaOnlineKeywordPage />;
}
