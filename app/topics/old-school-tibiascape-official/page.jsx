import OldSchoolTibiascapeOfficialKeywordPage, { generateMetadata } from './old-school-tibiascape-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiascapeOfficialKeywordPage />;
}
