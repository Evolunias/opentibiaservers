import Tibia14OldSchoolOtServerKeywordPage, { generateMetadata } from './tibia-14-old-school-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14OldSchoolOtServerKeywordPage />;
}
