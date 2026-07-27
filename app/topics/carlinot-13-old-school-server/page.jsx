import Carlinot13OldSchoolServerKeywordPage, { generateMetadata } from './carlinot-13-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot13OldSchoolServerKeywordPage />;
}
