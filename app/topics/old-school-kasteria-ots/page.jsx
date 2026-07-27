import OldSchoolKasteriaOtsKeywordPage, { generateMetadata } from './old-school-kasteria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolKasteriaOtsKeywordPage />;
}
