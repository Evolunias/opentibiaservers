import Luminera86OldSchoolServerKeywordPage, { generateMetadata } from './luminera-8-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera86OldSchoolServerKeywordPage />;
}
