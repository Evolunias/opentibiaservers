import OldSchoolTibijkaClientKeywordPage, { generateMetadata } from './old-school-tibijka-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibijkaClientKeywordPage />;
}
