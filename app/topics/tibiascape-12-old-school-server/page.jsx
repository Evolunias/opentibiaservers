import Tibiascape12OldSchoolServerKeywordPage, { generateMetadata } from './tibiascape-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape12OldSchoolServerKeywordPage />;
}
