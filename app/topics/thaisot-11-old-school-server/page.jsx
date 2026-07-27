import Thaisot11OldSchoolServerKeywordPage, { generateMetadata } from './thaisot-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot11OldSchoolServerKeywordPage />;
}
