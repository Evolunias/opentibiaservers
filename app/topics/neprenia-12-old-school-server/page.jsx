import Neprenia12OldSchoolServerKeywordPage, { generateMetadata } from './neprenia-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia12OldSchoolServerKeywordPage />;
}
