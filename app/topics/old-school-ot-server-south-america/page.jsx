import OldSchoolOtServerSouthAmericaKeywordPage, { generateMetadata } from './old-school-ot-server-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOtServerSouthAmericaKeywordPage />;
}
