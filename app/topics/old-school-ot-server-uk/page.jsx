import OldSchoolOtServerUkKeywordPage, { generateMetadata } from './old-school-ot-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOtServerUkKeywordPage />;
}
