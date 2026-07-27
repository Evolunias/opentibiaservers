import Carlinot14OldSchoolServerKeywordPage, { generateMetadata } from './carlinot-14-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot14OldSchoolServerKeywordPage />;
}
