import OldSchoolOpenTibiaServerFranceKeywordPage, { generateMetadata } from './old-school-open-tibia-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOpenTibiaServerFranceKeywordPage />;
}
