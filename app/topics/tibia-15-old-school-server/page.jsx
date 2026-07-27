import Tibia15OldSchoolServerKeywordPage, { generateMetadata } from './tibia-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15OldSchoolServerKeywordPage />;
}
