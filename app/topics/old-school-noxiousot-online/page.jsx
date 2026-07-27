import OldSchoolNoxiousotOnlineKeywordPage, { generateMetadata } from './old-school-noxiousot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNoxiousotOnlineKeywordPage />;
}
