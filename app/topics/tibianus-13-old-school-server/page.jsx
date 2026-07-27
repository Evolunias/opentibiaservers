import Tibianus13OldSchoolServerKeywordPage, { generateMetadata } from './tibianus-13-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus13OldSchoolServerKeywordPage />;
}
