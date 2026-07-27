import OldSchoolRealeraOtsKeywordPage, { generateMetadata } from './old-school-realera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRealeraOtsKeywordPage />;
}
