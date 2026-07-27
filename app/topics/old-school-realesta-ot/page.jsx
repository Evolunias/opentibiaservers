import OldSchoolRealestaOtKeywordPage, { generateMetadata } from './old-school-realesta-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRealestaOtKeywordPage />;
}
