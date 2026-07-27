import Blazera15OldSchoolServerKeywordPage, { generateMetadata } from './blazera-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera15OldSchoolServerKeywordPage />;
}
