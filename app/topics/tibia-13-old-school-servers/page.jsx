import Tibia13OldSchoolServersKeywordPage, { generateMetadata } from './tibia-13-old-school-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13OldSchoolServersKeywordPage />;
}
