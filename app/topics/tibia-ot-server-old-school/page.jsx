import TibiaOtServerOldSchoolKeywordPage, { generateMetadata } from './tibia-ot-server-old-school';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaOtServerOldSchoolKeywordPage />;
}
