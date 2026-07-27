import Tibianus100OldSchoolServerKeywordPage, { generateMetadata } from './tibianus-10-0-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus100OldSchoolServerKeywordPage />;
}
