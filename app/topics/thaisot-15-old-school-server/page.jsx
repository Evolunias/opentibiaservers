import Thaisot15OldSchoolServerKeywordPage, { generateMetadata } from './thaisot-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot15OldSchoolServerKeywordPage />;
}
