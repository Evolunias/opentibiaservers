import Tibiascape13OldSchoolServerKeywordPage, { generateMetadata } from './tibiascape-13-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape13OldSchoolServerKeywordPage />;
}
