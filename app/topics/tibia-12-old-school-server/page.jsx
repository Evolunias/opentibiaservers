import Tibia12OldSchoolServerKeywordPage, { generateMetadata } from './tibia-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12OldSchoolServerKeywordPage />;
}
