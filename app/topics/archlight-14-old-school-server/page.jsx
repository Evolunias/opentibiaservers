import Archlight14OldSchoolServerKeywordPage, { generateMetadata } from './archlight-14-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight14OldSchoolServerKeywordPage />;
}
