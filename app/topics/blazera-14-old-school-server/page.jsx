import Blazera14OldSchoolServerKeywordPage, { generateMetadata } from './blazera-14-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera14OldSchoolServerKeywordPage />;
}
