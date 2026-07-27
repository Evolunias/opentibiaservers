import Tibia80OldSchoolServerListKeywordPage, { generateMetadata } from './tibia-8-0-old-school-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80OldSchoolServerListKeywordPage />;
}
