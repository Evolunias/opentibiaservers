import Tibia84OldSchoolServersKeywordPage, { generateMetadata } from './tibia-8-4-old-school-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84OldSchoolServersKeywordPage />;
}
