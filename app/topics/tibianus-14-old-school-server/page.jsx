import Tibianus14OldSchoolServerKeywordPage, { generateMetadata } from './tibianus-14-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus14OldSchoolServerKeywordPage />;
}
