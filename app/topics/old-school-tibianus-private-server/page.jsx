import OldSchoolTibianusPrivateServerKeywordPage, { generateMetadata } from './old-school-tibianus-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibianusPrivateServerKeywordPage />;
}
