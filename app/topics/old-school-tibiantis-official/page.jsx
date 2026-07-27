import OldSchoolTibiantisOfficialKeywordPage, { generateMetadata } from './old-school-tibiantis-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiantisOfficialKeywordPage />;
}
