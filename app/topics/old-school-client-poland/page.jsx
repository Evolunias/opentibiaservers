import OldSchoolClientPolandKeywordPage, { generateMetadata } from './old-school-client-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClientPolandKeywordPage />;
}
