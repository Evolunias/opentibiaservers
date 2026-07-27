import OldSchoolStatusArgentinaKeywordPage, { generateMetadata } from './old-school-status-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolStatusArgentinaKeywordPage />;
}
