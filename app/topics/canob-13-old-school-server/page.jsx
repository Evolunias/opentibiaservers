import Canob13OldSchoolServerKeywordPage, { generateMetadata } from './canob-13-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob13OldSchoolServerKeywordPage />;
}
