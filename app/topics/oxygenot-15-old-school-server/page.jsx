import Oxygenot15OldSchoolServerKeywordPage, { generateMetadata } from './oxygenot-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot15OldSchoolServerKeywordPage />;
}
