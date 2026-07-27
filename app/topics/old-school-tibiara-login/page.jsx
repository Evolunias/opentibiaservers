import OldSchoolTibiaraLoginKeywordPage, { generateMetadata } from './old-school-tibiara-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaraLoginKeywordPage />;
}
