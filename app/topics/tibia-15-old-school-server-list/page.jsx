import Tibia15OldSchoolServerListKeywordPage, { generateMetadata } from './tibia-15-old-school-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15OldSchoolServerListKeywordPage />;
}
