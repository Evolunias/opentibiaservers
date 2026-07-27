import OldSchoolNilotOnlineKeywordPage, { generateMetadata } from './old-school-nilot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNilotOnlineKeywordPage />;
}
