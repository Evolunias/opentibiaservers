import OldSchoolTibiascapeTibiaKeywordPage, { generateMetadata } from './old-school-tibiascape-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiascapeTibiaKeywordPage />;
}
