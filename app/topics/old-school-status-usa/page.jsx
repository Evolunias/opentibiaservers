import OldSchoolStatusUsaKeywordPage, { generateMetadata } from './old-school-status-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolStatusUsaKeywordPage />;
}
