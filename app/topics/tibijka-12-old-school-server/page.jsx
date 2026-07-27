import Tibijka12OldSchoolServerKeywordPage, { generateMetadata } from './tibijka-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka12OldSchoolServerKeywordPage />;
}
