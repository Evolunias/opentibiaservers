import Tibia1098ServerOldSchoolKeywordPage, { generateMetadata } from './tibia-10-98-server-old-school';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098ServerOldSchoolKeywordPage />;
}
