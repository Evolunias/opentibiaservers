import Tibia13ServerOldSchoolKeywordPage, { generateMetadata } from './tibia-13-server-old-school';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13ServerOldSchoolKeywordPage />;
}
