import OldSchoolArchlightGuideKeywordPage, { generateMetadata } from './old-school-archlight-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolArchlightGuideKeywordPage />;
}
