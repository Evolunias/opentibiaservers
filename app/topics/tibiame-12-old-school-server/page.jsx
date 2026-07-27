import Tibiame12OldSchoolServerKeywordPage, { generateMetadata } from './tibiame-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame12OldSchoolServerKeywordPage />;
}
