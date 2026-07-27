import Luminera74OldSchoolServerKeywordPage, { generateMetadata } from './luminera-7-4-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera74OldSchoolServerKeywordPage />;
}
