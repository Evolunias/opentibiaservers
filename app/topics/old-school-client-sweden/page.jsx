import OldSchoolClientSwedenKeywordPage, { generateMetadata } from './old-school-client-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClientSwedenKeywordPage />;
}
