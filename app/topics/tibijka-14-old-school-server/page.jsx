import Tibijka14OldSchoolServerKeywordPage, { generateMetadata } from './tibijka-14-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka14OldSchoolServerKeywordPage />;
}
