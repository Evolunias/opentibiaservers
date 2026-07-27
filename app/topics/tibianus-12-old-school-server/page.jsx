import Tibianus12OldSchoolServerKeywordPage, { generateMetadata } from './tibianus-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus12OldSchoolServerKeywordPage />;
}
