import Tibia100OldSchoolServersKeywordPage, { generateMetadata } from './tibia-10-0-old-school-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100OldSchoolServersKeywordPage />;
}
