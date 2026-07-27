import Tibiascape71OldSchoolServerKeywordPage, { generateMetadata } from './tibiascape-7-1-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape71OldSchoolServerKeywordPage />;
}
