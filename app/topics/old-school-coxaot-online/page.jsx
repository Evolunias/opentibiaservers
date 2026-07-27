import OldSchoolCoxaotOnlineKeywordPage, { generateMetadata } from './old-school-coxaot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCoxaotOnlineKeywordPage />;
}
