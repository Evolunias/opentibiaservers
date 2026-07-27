import Tibia76OldSchoolServersKeywordPage, { generateMetadata } from './tibia-7-6-old-school-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76OldSchoolServersKeywordPage />;
}
