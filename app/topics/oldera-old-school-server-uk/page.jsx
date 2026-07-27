import OlderaOldSchoolServerUkKeywordPage, { generateMetadata } from './oldera-old-school-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaOldSchoolServerUkKeywordPage />;
}
