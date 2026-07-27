import Archlight84OldSchoolServerKeywordPage, { generateMetadata } from './archlight-8-4-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight84OldSchoolServerKeywordPage />;
}
