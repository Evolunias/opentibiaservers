import OldSchoolEvoleraKeywordPage, { generateMetadata } from './old-school-evolera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoleraKeywordPage />;
}
