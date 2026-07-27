import Medivia81OldSchoolServerKeywordPage, { generateMetadata } from './medivia-8-1-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia81OldSchoolServerKeywordPage />;
}
