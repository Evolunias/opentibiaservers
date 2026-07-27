import Nilot13OldSchoolServerKeywordPage, { generateMetadata } from './nilot-13-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot13OldSchoolServerKeywordPage />;
}
