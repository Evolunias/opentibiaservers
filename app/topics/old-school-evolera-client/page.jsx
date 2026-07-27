import OldSchoolEvoleraClientKeywordPage, { generateMetadata } from './old-school-evolera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoleraClientKeywordPage />;
}
