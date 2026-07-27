import Tibia81OldSchoolServerKeywordPage, { generateMetadata } from './tibia-8-1-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81OldSchoolServerKeywordPage />;
}
