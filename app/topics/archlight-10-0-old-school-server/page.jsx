import Archlight100OldSchoolServerKeywordPage, { generateMetadata } from './archlight-10-0-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight100OldSchoolServerKeywordPage />;
}
