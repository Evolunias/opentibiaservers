import Tibia71OldSchoolServerKeywordPage, { generateMetadata } from './tibia-7-1-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71OldSchoolServerKeywordPage />;
}
