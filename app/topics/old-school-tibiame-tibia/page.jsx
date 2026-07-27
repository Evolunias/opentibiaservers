import OldSchoolTibiameTibiaKeywordPage, { generateMetadata } from './old-school-tibiame-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiameTibiaKeywordPage />;
}
