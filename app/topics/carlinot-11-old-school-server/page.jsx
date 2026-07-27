import Carlinot11OldSchoolServerKeywordPage, { generateMetadata } from './carlinot-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot11OldSchoolServerKeywordPage />;
}
