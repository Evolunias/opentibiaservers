import Archlight96OldSchoolServerKeywordPage, { generateMetadata } from './archlight-9-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight96OldSchoolServerKeywordPage />;
}
