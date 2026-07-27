import OldSchoolTibianusTibiaKeywordPage, { generateMetadata } from './old-school-tibianus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibianusTibiaKeywordPage />;
}
