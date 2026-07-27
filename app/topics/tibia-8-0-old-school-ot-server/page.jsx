import Tibia80OldSchoolOtServerKeywordPage, { generateMetadata } from './tibia-8-0-old-school-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80OldSchoolOtServerKeywordPage />;
}
