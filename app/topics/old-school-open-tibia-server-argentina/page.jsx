import OldSchoolOpenTibiaServerArgentinaKeywordPage, { generateMetadata } from './old-school-open-tibia-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOpenTibiaServerArgentinaKeywordPage />;
}
