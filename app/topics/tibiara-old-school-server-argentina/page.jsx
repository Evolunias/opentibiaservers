import TibiaraOldSchoolServerArgentinaKeywordPage, { generateMetadata } from './tibiara-old-school-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraOldSchoolServerArgentinaKeywordPage />;
}
