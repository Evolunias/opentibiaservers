import OldSchoolTibiantisOpenTibiaKeywordPage, { generateMetadata } from './old-school-tibiantis-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiantisOpenTibiaKeywordPage />;
}
