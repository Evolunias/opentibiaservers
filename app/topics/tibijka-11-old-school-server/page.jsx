import Tibijka11OldSchoolServerKeywordPage, { generateMetadata } from './tibijka-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka11OldSchoolServerKeywordPage />;
}
