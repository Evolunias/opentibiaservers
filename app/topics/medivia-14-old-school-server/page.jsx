import Medivia14OldSchoolServerKeywordPage, { generateMetadata } from './medivia-14-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia14OldSchoolServerKeywordPage />;
}
