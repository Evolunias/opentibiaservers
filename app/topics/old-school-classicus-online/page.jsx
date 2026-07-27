import OldSchoolClassicusOnlineKeywordPage, { generateMetadata } from './old-school-classicus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClassicusOnlineKeywordPage />;
}
