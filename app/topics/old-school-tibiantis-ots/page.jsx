import OldSchoolTibiantisOtsKeywordPage, { generateMetadata } from './old-school-tibiantis-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiantisOtsKeywordPage />;
}
