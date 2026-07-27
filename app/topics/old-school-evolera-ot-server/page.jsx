import OldSchoolEvoleraOtServerKeywordPage, { generateMetadata } from './old-school-evolera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoleraOtServerKeywordPage />;
}
