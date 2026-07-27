import OldSchoolClientSouthAmericaKeywordPage, { generateMetadata } from './old-school-client-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClientSouthAmericaKeywordPage />;
}
