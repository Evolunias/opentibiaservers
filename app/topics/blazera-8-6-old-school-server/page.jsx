import Blazera86OldSchoolServerKeywordPage, { generateMetadata } from './blazera-8-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera86OldSchoolServerKeywordPage />;
}
