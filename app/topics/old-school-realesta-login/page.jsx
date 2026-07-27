import OldSchoolRealestaLoginKeywordPage, { generateMetadata } from './old-school-realesta-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRealestaLoginKeywordPage />;
}
