import Luminera1098OldSchoolServerKeywordPage, { generateMetadata } from './luminera-10-98-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera1098OldSchoolServerKeywordPage />;
}
