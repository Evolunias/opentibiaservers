import Thaisot100OldSchoolServerKeywordPage, { generateMetadata } from './thaisot-10-0-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot100OldSchoolServerKeywordPage />;
}
