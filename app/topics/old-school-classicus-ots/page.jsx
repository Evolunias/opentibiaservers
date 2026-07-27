import OldSchoolClassicusOtsKeywordPage, { generateMetadata } from './old-school-classicus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClassicusOtsKeywordPage />;
}
