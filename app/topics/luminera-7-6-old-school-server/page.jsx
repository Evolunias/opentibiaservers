import Luminera76OldSchoolServerKeywordPage, { generateMetadata } from './luminera-7-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera76OldSchoolServerKeywordPage />;
}
