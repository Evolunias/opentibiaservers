import Tibia11OldSchoolServersKeywordPage, { generateMetadata } from './tibia-11-old-school-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11OldSchoolServersKeywordPage />;
}
