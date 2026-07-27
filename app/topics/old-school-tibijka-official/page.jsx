import OldSchoolTibijkaOfficialKeywordPage, { generateMetadata } from './old-school-tibijka-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibijkaOfficialKeywordPage />;
}
