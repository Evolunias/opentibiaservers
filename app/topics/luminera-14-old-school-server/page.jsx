import Luminera14OldSchoolServerKeywordPage, { generateMetadata } from './luminera-14-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera14OldSchoolServerKeywordPage />;
}
