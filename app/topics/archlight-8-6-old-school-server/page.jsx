import Archlight86OldSchoolServerKeywordPage, { generateMetadata } from './archlight-8-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight86OldSchoolServerKeywordPage />;
}
