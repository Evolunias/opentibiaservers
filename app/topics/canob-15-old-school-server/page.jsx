import Canob15OldSchoolServerKeywordPage, { generateMetadata } from './canob-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob15OldSchoolServerKeywordPage />;
}
