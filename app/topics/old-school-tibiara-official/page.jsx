import OldSchoolTibiaraOfficialKeywordPage, { generateMetadata } from './old-school-tibiara-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaraOfficialKeywordPage />;
}
