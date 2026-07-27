import Luminera96OldSchoolServerKeywordPage, { generateMetadata } from './luminera-9-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera96OldSchoolServerKeywordPage />;
}
