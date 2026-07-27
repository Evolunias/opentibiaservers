import OldSchoolEvoleraOtsKeywordPage, { generateMetadata } from './old-school-evolera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoleraOtsKeywordPage />;
}
