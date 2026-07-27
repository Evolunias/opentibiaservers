import Tibiascape15OldSchoolServerKeywordPage, { generateMetadata } from './tibiascape-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape15OldSchoolServerKeywordPage />;
}
