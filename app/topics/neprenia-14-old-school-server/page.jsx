import Neprenia14OldSchoolServerKeywordPage, { generateMetadata } from './neprenia-14-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia14OldSchoolServerKeywordPage />;
}
