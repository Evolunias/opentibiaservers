import Medivia13OldSchoolServerKeywordPage, { generateMetadata } from './medivia-13-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia13OldSchoolServerKeywordPage />;
}
