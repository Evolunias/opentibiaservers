import Thaisot14OldSchoolServerKeywordPage, { generateMetadata } from './thaisot-14-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot14OldSchoolServerKeywordPage />;
}
