import Miracle11OldSchoolServerKeywordPage, { generateMetadata } from './miracle-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle11OldSchoolServerKeywordPage />;
}
