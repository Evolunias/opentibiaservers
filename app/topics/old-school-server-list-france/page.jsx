import OldSchoolServerListFranceKeywordPage, { generateMetadata } from './old-school-server-list-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolServerListFranceKeywordPage />;
}
