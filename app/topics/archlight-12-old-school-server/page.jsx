import Archlight12OldSchoolServerKeywordPage, { generateMetadata } from './archlight-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight12OldSchoolServerKeywordPage />;
}
