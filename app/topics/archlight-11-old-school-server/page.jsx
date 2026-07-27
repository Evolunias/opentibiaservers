import Archlight11OldSchoolServerKeywordPage, { generateMetadata } from './archlight-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight11OldSchoolServerKeywordPage />;
}
