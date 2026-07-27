import Canob12OldSchoolServerKeywordPage, { generateMetadata } from './canob-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob12OldSchoolServerKeywordPage />;
}
