import OldSchoolTibiaraClientKeywordPage, { generateMetadata } from './old-school-tibiara-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaraClientKeywordPage />;
}
