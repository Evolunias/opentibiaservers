import OldSchoolTibiantisOtKeywordPage, { generateMetadata } from './old-school-tibiantis-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiantisOtKeywordPage />;
}
