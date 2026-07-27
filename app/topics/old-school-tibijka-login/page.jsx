import OldSchoolTibijkaLoginKeywordPage, { generateMetadata } from './old-school-tibijka-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibijkaLoginKeywordPage />;
}
