import Tibia100OldSchoolOtServerKeywordPage, { generateMetadata } from './tibia-10-0-old-school-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100OldSchoolOtServerKeywordPage />;
}
