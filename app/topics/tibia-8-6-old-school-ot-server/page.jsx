import Tibia86OldSchoolOtServerKeywordPage, { generateMetadata } from './tibia-8-6-old-school-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86OldSchoolOtServerKeywordPage />;
}
