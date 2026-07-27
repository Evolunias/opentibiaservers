import OldSchoolTibianusLoginKeywordPage, { generateMetadata } from './old-school-tibianus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibianusLoginKeywordPage />;
}
