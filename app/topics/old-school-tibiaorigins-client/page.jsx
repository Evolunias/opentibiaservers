import OldSchoolTibiaoriginsClientKeywordPage, { generateMetadata } from './old-school-tibiaorigins-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaoriginsClientKeywordPage />;
}
