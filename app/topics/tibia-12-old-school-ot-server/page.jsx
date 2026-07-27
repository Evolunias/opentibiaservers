import Tibia12OldSchoolOtServerKeywordPage, { generateMetadata } from './tibia-12-old-school-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12OldSchoolOtServerKeywordPage />;
}
