import OldSchoolRealestaServerKeywordPage, { generateMetadata } from './old-school-realesta-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRealestaServerKeywordPage />;
}
