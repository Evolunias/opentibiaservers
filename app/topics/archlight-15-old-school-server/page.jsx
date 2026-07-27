import Archlight15OldSchoolServerKeywordPage, { generateMetadata } from './archlight-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight15OldSchoolServerKeywordPage />;
}
