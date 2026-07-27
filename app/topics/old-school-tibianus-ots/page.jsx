import OldSchoolTibianusOtsKeywordPage, { generateMetadata } from './old-school-tibianus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibianusOtsKeywordPage />;
}
