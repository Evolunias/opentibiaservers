import Tibia1098OldSchoolServerListKeywordPage, { generateMetadata } from './tibia-10-98-old-school-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098OldSchoolServerListKeywordPage />;
}
