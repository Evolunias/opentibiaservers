import Tibia11OldSchoolOtServerKeywordPage, { generateMetadata } from './tibia-11-old-school-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11OldSchoolOtServerKeywordPage />;
}
