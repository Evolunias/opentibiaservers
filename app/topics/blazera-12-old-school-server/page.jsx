import Blazera12OldSchoolServerKeywordPage, { generateMetadata } from './blazera-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera12OldSchoolServerKeywordPage />;
}
