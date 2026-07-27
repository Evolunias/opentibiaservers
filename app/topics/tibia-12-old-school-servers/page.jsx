import Tibia12OldSchoolServersKeywordPage, { generateMetadata } from './tibia-12-old-school-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12OldSchoolServersKeywordPage />;
}
