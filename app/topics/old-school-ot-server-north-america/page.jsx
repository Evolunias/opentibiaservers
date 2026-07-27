import OldSchoolOtServerNorthAmericaKeywordPage, { generateMetadata } from './old-school-ot-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOtServerNorthAmericaKeywordPage />;
}
