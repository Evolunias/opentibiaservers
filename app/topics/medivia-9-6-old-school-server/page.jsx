import Medivia96OldSchoolServerKeywordPage, { generateMetadata } from './medivia-9-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia96OldSchoolServerKeywordPage />;
}
