import OldSchoolClientCanadaKeywordPage, { generateMetadata } from './old-school-client-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClientCanadaKeywordPage />;
}
