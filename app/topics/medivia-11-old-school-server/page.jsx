import Medivia11OldSchoolServerKeywordPage, { generateMetadata } from './medivia-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia11OldSchoolServerKeywordPage />;
}
