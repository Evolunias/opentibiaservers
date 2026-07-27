import Luminera100OldSchoolServerKeywordPage, { generateMetadata } from './luminera-10-0-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera100OldSchoolServerKeywordPage />;
}
