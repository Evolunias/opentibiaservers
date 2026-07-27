import Tibia96OldSchoolOtServerKeywordPage, { generateMetadata } from './tibia-9-6-old-school-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96OldSchoolOtServerKeywordPage />;
}
