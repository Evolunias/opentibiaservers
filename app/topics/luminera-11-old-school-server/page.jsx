import Luminera11OldSchoolServerKeywordPage, { generateMetadata } from './luminera-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera11OldSchoolServerKeywordPage />;
}
