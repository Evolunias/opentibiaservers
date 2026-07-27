import OldSchoolStatusNorthAmericaKeywordPage, { generateMetadata } from './old-school-status-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolStatusNorthAmericaKeywordPage />;
}
