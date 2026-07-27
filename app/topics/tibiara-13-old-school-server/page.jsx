import Tibiara13OldSchoolServerKeywordPage, { generateMetadata } from './tibiara-13-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara13OldSchoolServerKeywordPage />;
}
