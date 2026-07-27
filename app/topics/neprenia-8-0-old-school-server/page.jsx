import Neprenia80OldSchoolServerKeywordPage, { generateMetadata } from './neprenia-8-0-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia80OldSchoolServerKeywordPage />;
}
