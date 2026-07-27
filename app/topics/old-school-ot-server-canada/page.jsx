import OldSchoolOtServerCanadaKeywordPage, { generateMetadata } from './old-school-ot-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOtServerCanadaKeywordPage />;
}
