import Tibia86OldSchoolServersKeywordPage, { generateMetadata } from './tibia-8-6-old-school-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86OldSchoolServersKeywordPage />;
}
