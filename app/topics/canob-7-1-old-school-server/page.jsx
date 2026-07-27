import Canob71OldSchoolServerKeywordPage, { generateMetadata } from './canob-7-1-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob71OldSchoolServerKeywordPage />;
}
