import OldSchoolTibiameKeywordPage, { generateMetadata } from './old-school-tibiame';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiameKeywordPage />;
}
