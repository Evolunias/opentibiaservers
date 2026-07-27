import Archlight71OldSchoolServerKeywordPage, { generateMetadata } from './archlight-7-1-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight71OldSchoolServerKeywordPage />;
}
