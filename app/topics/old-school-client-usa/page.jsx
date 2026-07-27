import OldSchoolClientUsaKeywordPage, { generateMetadata } from './old-school-client-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClientUsaKeywordPage />;
}
