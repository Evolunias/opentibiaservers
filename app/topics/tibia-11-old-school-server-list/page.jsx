import Tibia11OldSchoolServerListKeywordPage, { generateMetadata } from './tibia-11-old-school-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11OldSchoolServerListKeywordPage />;
}
