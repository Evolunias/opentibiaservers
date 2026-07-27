import Tibia15OldSchoolOtServerKeywordPage, { generateMetadata } from './tibia-15-old-school-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15OldSchoolOtServerKeywordPage />;
}
