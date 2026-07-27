import OldSchoolMarolaotOnlineKeywordPage, { generateMetadata } from './old-school-marolaot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMarolaotOnlineKeywordPage />;
}
