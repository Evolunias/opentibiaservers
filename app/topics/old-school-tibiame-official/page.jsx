import OldSchoolTibiameOfficialKeywordPage, { generateMetadata } from './old-school-tibiame-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiameOfficialKeywordPage />;
}
