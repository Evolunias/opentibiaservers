import OldSchoolTibianusOfficialKeywordPage, { generateMetadata } from './old-school-tibianus-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibianusOfficialKeywordPage />;
}
