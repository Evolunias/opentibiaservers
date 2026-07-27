import Tibia14OldSchoolServerListKeywordPage, { generateMetadata } from './tibia-14-old-school-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14OldSchoolServerListKeywordPage />;
}
