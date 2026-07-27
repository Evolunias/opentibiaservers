import OldSchoolTibiaoriginsPrivateServerKeywordPage, { generateMetadata } from './old-school-tibiaorigins-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaoriginsPrivateServerKeywordPage />;
}
