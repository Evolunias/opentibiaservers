import Medivia100OldSchoolServerKeywordPage, { generateMetadata } from './medivia-10-0-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia100OldSchoolServerKeywordPage />;
}
