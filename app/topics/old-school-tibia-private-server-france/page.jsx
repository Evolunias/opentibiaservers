import OldSchoolTibiaPrivateServerFranceKeywordPage, { generateMetadata } from './old-school-tibia-private-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaPrivateServerFranceKeywordPage />;
}
