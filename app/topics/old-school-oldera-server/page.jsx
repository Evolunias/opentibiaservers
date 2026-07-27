import OldSchoolOlderaServerKeywordPage, { generateMetadata } from './old-school-oldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOlderaServerKeywordPage />;
}
