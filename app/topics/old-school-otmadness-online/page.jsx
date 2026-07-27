import OldSchoolOtmadnessOnlineKeywordPage, { generateMetadata } from './old-school-otmadness-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOtmadnessOnlineKeywordPage />;
}
