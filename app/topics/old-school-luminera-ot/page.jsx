import OldSchoolLumineraOtKeywordPage, { generateMetadata } from './old-school-luminera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolLumineraOtKeywordPage />;
}
