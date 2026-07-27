import OldSchoolUnlineOtsKeywordPage, { generateMetadata } from './old-school-unline-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolUnlineOtsKeywordPage />;
}
