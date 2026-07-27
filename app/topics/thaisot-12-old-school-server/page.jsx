import Thaisot12OldSchoolServerKeywordPage, { generateMetadata } from './thaisot-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot12OldSchoolServerKeywordPage />;
}
