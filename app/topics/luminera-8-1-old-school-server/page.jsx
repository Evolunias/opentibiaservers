import Luminera81OldSchoolServerKeywordPage, { generateMetadata } from './luminera-8-1-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera81OldSchoolServerKeywordPage />;
}
