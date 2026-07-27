import Medivia15OldSchoolServerKeywordPage, { generateMetadata } from './medivia-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia15OldSchoolServerKeywordPage />;
}
