import OldSchoolTibianusOtKeywordPage, { generateMetadata } from './old-school-tibianus-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibianusOtKeywordPage />;
}
