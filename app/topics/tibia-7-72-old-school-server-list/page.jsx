import Tibia772OldSchoolServerListKeywordPage, { generateMetadata } from './tibia-7-72-old-school-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772OldSchoolServerListKeywordPage />;
}
