import OldSchoolUnlineOnlineKeywordPage, { generateMetadata } from './old-school-unline-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolUnlineOnlineKeywordPage />;
}
