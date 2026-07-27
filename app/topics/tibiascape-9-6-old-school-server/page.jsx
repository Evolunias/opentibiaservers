import Tibiascape96OldSchoolServerKeywordPage, { generateMetadata } from './tibiascape-9-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape96OldSchoolServerKeywordPage />;
}
