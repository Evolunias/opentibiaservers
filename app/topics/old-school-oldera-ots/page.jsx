import OldSchoolOlderaOtsKeywordPage, { generateMetadata } from './old-school-oldera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOlderaOtsKeywordPage />;
}
