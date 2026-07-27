import OldSchoolClassicusOtKeywordPage, { generateMetadata } from './old-school-classicus-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClassicusOtKeywordPage />;
}
