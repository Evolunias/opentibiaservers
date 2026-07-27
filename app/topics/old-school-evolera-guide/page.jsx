import OldSchoolEvoleraGuideKeywordPage, { generateMetadata } from './old-school-evolera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoleraGuideKeywordPage />;
}
