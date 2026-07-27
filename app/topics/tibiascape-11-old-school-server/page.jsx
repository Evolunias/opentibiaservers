import Tibiascape11OldSchoolServerKeywordPage, { generateMetadata } from './tibiascape-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape11OldSchoolServerKeywordPage />;
}
