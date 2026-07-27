import AlasteraOldSchoolServerFranceKeywordPage, { generateMetadata } from './alastera-old-school-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraOldSchoolServerFranceKeywordPage />;
}
