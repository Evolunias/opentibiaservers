import OldSchoolTibiantisServerKeywordPage, { generateMetadata } from './old-school-tibiantis-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiantisServerKeywordPage />;
}
