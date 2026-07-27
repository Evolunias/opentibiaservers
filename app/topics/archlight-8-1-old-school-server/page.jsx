import Archlight81OldSchoolServerKeywordPage, { generateMetadata } from './archlight-8-1-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight81OldSchoolServerKeywordPage />;
}
