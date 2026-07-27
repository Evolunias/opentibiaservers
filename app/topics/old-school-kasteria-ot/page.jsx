import OldSchoolKasteriaOtKeywordPage, { generateMetadata } from './old-school-kasteria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolKasteriaOtKeywordPage />;
}
