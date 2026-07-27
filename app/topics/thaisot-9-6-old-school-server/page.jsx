import Thaisot96OldSchoolServerKeywordPage, { generateMetadata } from './thaisot-9-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot96OldSchoolServerKeywordPage />;
}
