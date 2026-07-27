import OldSchoolStatusSouthAmericaKeywordPage, { generateMetadata } from './old-school-status-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolStatusSouthAmericaKeywordPage />;
}
