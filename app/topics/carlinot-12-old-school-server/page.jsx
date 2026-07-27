import Carlinot12OldSchoolServerKeywordPage, { generateMetadata } from './carlinot-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot12OldSchoolServerKeywordPage />;
}
