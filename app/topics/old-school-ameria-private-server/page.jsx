import OldSchoolAmeriaPrivateServerKeywordPage, { generateMetadata } from './old-school-ameria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAmeriaPrivateServerKeywordPage />;
}
