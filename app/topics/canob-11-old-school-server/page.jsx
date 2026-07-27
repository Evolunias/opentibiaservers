import Canob11OldSchoolServerKeywordPage, { generateMetadata } from './canob-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob11OldSchoolServerKeywordPage />;
}
