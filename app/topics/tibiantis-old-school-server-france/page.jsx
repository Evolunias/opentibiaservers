import TibiantisOldSchoolServerFranceKeywordPage, { generateMetadata } from './tibiantis-old-school-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisOldSchoolServerFranceKeywordPage />;
}
