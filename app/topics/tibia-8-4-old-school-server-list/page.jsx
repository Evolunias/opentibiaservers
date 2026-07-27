import Tibia84OldSchoolServerListKeywordPage, { generateMetadata } from './tibia-8-4-old-school-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84OldSchoolServerListKeywordPage />;
}
