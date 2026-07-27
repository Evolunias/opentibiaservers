import Canob14OldSchoolServerKeywordPage, { generateMetadata } from './canob-14-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob14OldSchoolServerKeywordPage />;
}
