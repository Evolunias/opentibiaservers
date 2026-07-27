import Tibiara11OldSchoolServerKeywordPage, { generateMetadata } from './tibiara-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara11OldSchoolServerKeywordPage />;
}
