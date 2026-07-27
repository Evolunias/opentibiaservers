import Thaisot86OldSchoolServerKeywordPage, { generateMetadata } from './thaisot-8-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot86OldSchoolServerKeywordPage />;
}
