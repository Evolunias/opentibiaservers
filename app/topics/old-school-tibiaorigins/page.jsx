import OldSchoolTibiaoriginsKeywordPage, { generateMetadata } from './old-school-tibiaorigins';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaoriginsKeywordPage />;
}
