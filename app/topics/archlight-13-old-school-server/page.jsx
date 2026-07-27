import Archlight13OldSchoolServerKeywordPage, { generateMetadata } from './archlight-13-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight13OldSchoolServerKeywordPage />;
}
