import OldSchoolClientUkKeywordPage, { generateMetadata } from './old-school-client-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClientUkKeywordPage />;
}
