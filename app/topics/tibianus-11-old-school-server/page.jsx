import Tibianus11OldSchoolServerKeywordPage, { generateMetadata } from './tibianus-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus11OldSchoolServerKeywordPage />;
}
