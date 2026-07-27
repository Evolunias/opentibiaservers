import OldSchoolRubinotOnlineKeywordPage, { generateMetadata } from './old-school-rubinot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRubinotOnlineKeywordPage />;
}
