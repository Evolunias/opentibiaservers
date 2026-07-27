import OldSchoolTibiantisTibiaKeywordPage, { generateMetadata } from './old-school-tibiantis-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiantisTibiaKeywordPage />;
}
