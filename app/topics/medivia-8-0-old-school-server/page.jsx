import Medivia80OldSchoolServerKeywordPage, { generateMetadata } from './medivia-8-0-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia80OldSchoolServerKeywordPage />;
}
