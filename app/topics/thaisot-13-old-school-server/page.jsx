import Thaisot13OldSchoolServerKeywordPage, { generateMetadata } from './thaisot-13-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot13OldSchoolServerKeywordPage />;
}
