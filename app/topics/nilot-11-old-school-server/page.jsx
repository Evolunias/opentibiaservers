import Nilot11OldSchoolServerKeywordPage, { generateMetadata } from './nilot-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot11OldSchoolServerKeywordPage />;
}
