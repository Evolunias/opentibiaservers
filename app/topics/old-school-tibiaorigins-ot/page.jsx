import OldSchoolTibiaoriginsOtKeywordPage, { generateMetadata } from './old-school-tibiaorigins-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaoriginsOtKeywordPage />;
}
