import OldSchoolThaisotOnlineKeywordPage, { generateMetadata } from './old-school-thaisot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolThaisotOnlineKeywordPage />;
}
