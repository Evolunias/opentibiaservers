import Tibiara12OldSchoolServerKeywordPage, { generateMetadata } from './tibiara-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara12OldSchoolServerKeywordPage />;
}
