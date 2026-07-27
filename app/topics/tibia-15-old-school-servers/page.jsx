import Tibia15OldSchoolServersKeywordPage, { generateMetadata } from './tibia-15-old-school-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15OldSchoolServersKeywordPage />;
}
