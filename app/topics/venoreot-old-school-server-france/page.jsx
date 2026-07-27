import VenoreotOldSchoolServerFranceKeywordPage, { generateMetadata } from './venoreot-old-school-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotOldSchoolServerFranceKeywordPage />;
}
