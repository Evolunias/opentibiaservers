import TibiaCustomServerOldSchoolKeywordPage, { generateMetadata } from './tibia-custom-server-old-school';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaCustomServerOldSchoolKeywordPage />;
}
