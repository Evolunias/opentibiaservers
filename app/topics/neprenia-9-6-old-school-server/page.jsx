import Neprenia96OldSchoolServerKeywordPage, { generateMetadata } from './neprenia-9-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia96OldSchoolServerKeywordPage />;
}
