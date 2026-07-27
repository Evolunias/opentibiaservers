import Tibiascape100OldSchoolServerKeywordPage, { generateMetadata } from './tibiascape-10-0-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape100OldSchoolServerKeywordPage />;
}
