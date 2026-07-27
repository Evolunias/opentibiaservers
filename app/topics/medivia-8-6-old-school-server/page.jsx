import Medivia86OldSchoolServerKeywordPage, { generateMetadata } from './medivia-8-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia86OldSchoolServerKeywordPage />;
}
