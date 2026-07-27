import OldSchoolOxygenotOtsKeywordPage, { generateMetadata } from './old-school-oxygenot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOxygenotOtsKeywordPage />;
}
