import OldSchoolYurotsOnlineKeywordPage, { generateMetadata } from './old-school-yurots-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolYurotsOnlineKeywordPage />;
}
