import Luminera13OldSchoolServerKeywordPage, { generateMetadata } from './luminera-13-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera13OldSchoolServerKeywordPage />;
}
