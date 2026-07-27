import OldSchoolEvoleraOtKeywordPage, { generateMetadata } from './old-school-evolera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoleraOtKeywordPage />;
}
