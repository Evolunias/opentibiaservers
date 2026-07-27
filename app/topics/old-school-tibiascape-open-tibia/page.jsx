import OldSchoolTibiascapeOpenTibiaKeywordPage, { generateMetadata } from './old-school-tibiascape-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiascapeOpenTibiaKeywordPage />;
}
