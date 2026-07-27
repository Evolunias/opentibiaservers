import Luminera15OldSchoolServerKeywordPage, { generateMetadata } from './luminera-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera15OldSchoolServerKeywordPage />;
}
