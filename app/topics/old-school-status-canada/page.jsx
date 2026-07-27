import OldSchoolStatusCanadaKeywordPage, { generateMetadata } from './old-school-status-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolStatusCanadaKeywordPage />;
}
