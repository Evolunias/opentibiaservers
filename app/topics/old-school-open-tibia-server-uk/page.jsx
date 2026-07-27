import OldSchoolOpenTibiaServerUkKeywordPage, { generateMetadata } from './old-school-open-tibia-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOpenTibiaServerUkKeywordPage />;
}
