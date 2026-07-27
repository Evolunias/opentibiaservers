import Luminera12OldSchoolServerKeywordPage, { generateMetadata } from './luminera-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera12OldSchoolServerKeywordPage />;
}
