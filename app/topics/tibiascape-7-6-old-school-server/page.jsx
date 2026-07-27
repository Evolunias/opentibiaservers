import Tibiascape76OldSchoolServerKeywordPage, { generateMetadata } from './tibiascape-7-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape76OldSchoolServerKeywordPage />;
}
