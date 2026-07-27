import CarlinotOldSchoolServerFranceKeywordPage, { generateMetadata } from './carlinot-old-school-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotOldSchoolServerFranceKeywordPage />;
}
