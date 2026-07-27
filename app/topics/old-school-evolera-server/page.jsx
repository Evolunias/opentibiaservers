import OldSchoolEvoleraServerKeywordPage, { generateMetadata } from './old-school-evolera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoleraServerKeywordPage />;
}
