import OldSchoolHarmoniaOtOnlineKeywordPage, { generateMetadata } from './old-school-harmonia-ot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolHarmoniaOtOnlineKeywordPage />;
}
