import Tibia13OldSchoolServerListKeywordPage, { generateMetadata } from './tibia-13-old-school-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13OldSchoolServerListKeywordPage />;
}
