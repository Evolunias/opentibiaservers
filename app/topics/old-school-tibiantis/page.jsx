import OldSchoolTibiantisKeywordPage, { generateMetadata } from './old-school-tibiantis';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiantisKeywordPage />;
}
