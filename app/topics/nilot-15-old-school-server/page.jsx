import Nilot15OldSchoolServerKeywordPage, { generateMetadata } from './nilot-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot15OldSchoolServerKeywordPage />;
}
