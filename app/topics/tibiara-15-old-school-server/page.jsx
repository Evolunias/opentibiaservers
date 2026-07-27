import Tibiara15OldSchoolServerKeywordPage, { generateMetadata } from './tibiara-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara15OldSchoolServerKeywordPage />;
}
