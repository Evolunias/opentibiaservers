import Tibiascape86OldSchoolServerKeywordPage, { generateMetadata } from './tibiascape-8-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape86OldSchoolServerKeywordPage />;
}
