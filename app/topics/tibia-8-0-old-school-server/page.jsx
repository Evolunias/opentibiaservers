import Tibia80OldSchoolServerKeywordPage, { generateMetadata } from './tibia-8-0-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80OldSchoolServerKeywordPage />;
}
