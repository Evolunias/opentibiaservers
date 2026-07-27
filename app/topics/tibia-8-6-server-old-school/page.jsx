import Tibia86ServerOldSchoolKeywordPage, { generateMetadata } from './tibia-8-6-server-old-school';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86ServerOldSchoolKeywordPage />;
}
