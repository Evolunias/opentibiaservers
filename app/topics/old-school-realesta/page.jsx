import OldSchoolRealestaKeywordPage, { generateMetadata } from './old-school-realesta';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRealestaKeywordPage />;
}
