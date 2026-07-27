import Nilot12OldSchoolServerKeywordPage, { generateMetadata } from './nilot-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot12OldSchoolServerKeywordPage />;
}
