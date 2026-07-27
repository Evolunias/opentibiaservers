import OldSchoolTibiaoriginsServerKeywordPage, { generateMetadata } from './old-school-tibiaorigins-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaoriginsServerKeywordPage />;
}
