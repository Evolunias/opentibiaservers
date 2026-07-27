import Medivia12OldSchoolServerKeywordPage, { generateMetadata } from './medivia-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia12OldSchoolServerKeywordPage />;
}
