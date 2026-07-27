import Tibia71OldSchoolServerListKeywordPage, { generateMetadata } from './tibia-7-1-old-school-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71OldSchoolServerListKeywordPage />;
}
