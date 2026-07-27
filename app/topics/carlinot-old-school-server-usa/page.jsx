import CarlinotOldSchoolServerUsaKeywordPage, { generateMetadata } from './carlinot-old-school-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotOldSchoolServerUsaKeywordPage />;
}
