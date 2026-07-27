import OldSchoolTibiaoriginsOtServerKeywordPage, { generateMetadata } from './old-school-tibiaorigins-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaoriginsOtServerKeywordPage />;
}
