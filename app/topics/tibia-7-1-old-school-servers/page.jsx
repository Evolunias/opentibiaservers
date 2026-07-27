import Tibia71OldSchoolServersKeywordPage, { generateMetadata } from './tibia-7-1-old-school-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71OldSchoolServersKeywordPage />;
}
