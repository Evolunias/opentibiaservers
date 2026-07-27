import OldSchoolTibiaoriginsGuideKeywordPage, { generateMetadata } from './old-school-tibiaorigins-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaoriginsGuideKeywordPage />;
}
