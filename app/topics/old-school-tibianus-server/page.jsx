import OldSchoolTibianusServerKeywordPage, { generateMetadata } from './old-school-tibianus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibianusServerKeywordPage />;
}
