import OldSchoolAlasteraPrivateServerKeywordPage, { generateMetadata } from './old-school-alastera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAlasteraPrivateServerKeywordPage />;
}
