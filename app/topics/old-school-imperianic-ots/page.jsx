import OldSchoolImperianicOtsKeywordPage, { generateMetadata } from './old-school-imperianic-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolImperianicOtsKeywordPage />;
}
