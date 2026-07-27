import Thaisot81OldSchoolServerKeywordPage, { generateMetadata } from './thaisot-8-1-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot81OldSchoolServerKeywordPage />;
}
