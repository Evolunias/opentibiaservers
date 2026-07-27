import Luminera80OldSchoolServerKeywordPage, { generateMetadata } from './luminera-8-0-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera80OldSchoolServerKeywordPage />;
}
