import OldSchoolOlderaPrivateServerKeywordPage, { generateMetadata } from './old-school-oldera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOlderaPrivateServerKeywordPage />;
}
