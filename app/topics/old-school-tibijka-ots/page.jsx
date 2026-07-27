import OldSchoolTibijkaOtsKeywordPage, { generateMetadata } from './old-school-tibijka-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibijkaOtsKeywordPage />;
}
