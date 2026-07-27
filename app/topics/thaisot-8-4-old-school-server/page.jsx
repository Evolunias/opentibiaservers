import Thaisot84OldSchoolServerKeywordPage, { generateMetadata } from './thaisot-8-4-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot84OldSchoolServerKeywordPage />;
}
