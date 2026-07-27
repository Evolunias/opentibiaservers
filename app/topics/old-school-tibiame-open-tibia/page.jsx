import OldSchoolTibiameOpenTibiaKeywordPage, { generateMetadata } from './old-school-tibiame-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiameOpenTibiaKeywordPage />;
}
