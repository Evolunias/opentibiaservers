import Carlinot15OldSchoolServerKeywordPage, { generateMetadata } from './carlinot-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot15OldSchoolServerKeywordPage />;
}
