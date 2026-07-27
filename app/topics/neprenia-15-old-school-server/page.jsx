import Neprenia15OldSchoolServerKeywordPage, { generateMetadata } from './neprenia-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia15OldSchoolServerKeywordPage />;
}
