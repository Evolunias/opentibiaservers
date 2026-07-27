import OldSchoolNilotOtsKeywordPage, { generateMetadata } from './old-school-nilot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNilotOtsKeywordPage />;
}
