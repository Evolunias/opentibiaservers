import Luminera71OldSchoolServerKeywordPage, { generateMetadata } from './luminera-7-1-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera71OldSchoolServerKeywordPage />;
}
