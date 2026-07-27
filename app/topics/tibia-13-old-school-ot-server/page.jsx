import Tibia13OldSchoolOtServerKeywordPage, { generateMetadata } from './tibia-13-old-school-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13OldSchoolOtServerKeywordPage />;
}
