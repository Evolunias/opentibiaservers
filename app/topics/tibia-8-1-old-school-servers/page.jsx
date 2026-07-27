import Tibia81OldSchoolServersKeywordPage, { generateMetadata } from './tibia-8-1-old-school-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81OldSchoolServersKeywordPage />;
}
