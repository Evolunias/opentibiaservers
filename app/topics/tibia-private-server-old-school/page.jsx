import TibiaPrivateServerOldSchoolKeywordPage, { generateMetadata } from './tibia-private-server-old-school';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaPrivateServerOldSchoolKeywordPage />;
}
