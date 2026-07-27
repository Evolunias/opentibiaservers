import OldSchoolStatusBrazilKeywordPage, { generateMetadata } from './old-school-status-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolStatusBrazilKeywordPage />;
}
