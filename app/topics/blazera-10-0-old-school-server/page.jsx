import Blazera100OldSchoolServerKeywordPage, { generateMetadata } from './blazera-10-0-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera100OldSchoolServerKeywordPage />;
}
