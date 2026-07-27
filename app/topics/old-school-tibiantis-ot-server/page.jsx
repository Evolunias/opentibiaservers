import OldSchoolTibiantisOtServerKeywordPage, { generateMetadata } from './old-school-tibiantis-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiantisOtServerKeywordPage />;
}
