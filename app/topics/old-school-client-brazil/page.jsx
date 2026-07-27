import OldSchoolClientBrazilKeywordPage, { generateMetadata } from './old-school-client-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClientBrazilKeywordPage />;
}
