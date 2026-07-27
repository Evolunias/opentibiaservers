import OldSchoolTibianusKeywordPage, { generateMetadata } from './old-school-tibianus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibianusKeywordPage />;
}
