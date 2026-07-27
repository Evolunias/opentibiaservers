import OldSchoolDuraOnlineGuideKeywordPage, { generateMetadata } from './old-school-dura-online-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDuraOnlineGuideKeywordPage />;
}
