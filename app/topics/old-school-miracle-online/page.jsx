import OldSchoolMiracleOnlineKeywordPage, { generateMetadata } from './old-school-miracle-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMiracleOnlineKeywordPage />;
}
