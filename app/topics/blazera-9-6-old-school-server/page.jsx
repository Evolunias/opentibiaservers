import Blazera96OldSchoolServerKeywordPage, { generateMetadata } from './blazera-9-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera96OldSchoolServerKeywordPage />;
}
