import OldSchoolBlazeraOtsKeywordPage, { generateMetadata } from './old-school-blazera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolBlazeraOtsKeywordPage />;
}
