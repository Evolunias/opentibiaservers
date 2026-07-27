import OldSchoolClientNorthAmericaKeywordPage, { generateMetadata } from './old-school-client-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClientNorthAmericaKeywordPage />;
}
