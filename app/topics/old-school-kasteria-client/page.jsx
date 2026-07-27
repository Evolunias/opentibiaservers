import OldSchoolKasteriaClientKeywordPage, { generateMetadata } from './old-school-kasteria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolKasteriaClientKeywordPage />;
}
