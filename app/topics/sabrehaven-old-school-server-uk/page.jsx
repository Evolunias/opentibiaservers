import SabrehavenOldSchoolServerUkKeywordPage, { generateMetadata } from './sabrehaven-old-school-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenOldSchoolServerUkKeywordPage />;
}
