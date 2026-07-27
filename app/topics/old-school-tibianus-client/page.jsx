import OldSchoolTibianusClientKeywordPage, { generateMetadata } from './old-school-tibianus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibianusClientKeywordPage />;
}
