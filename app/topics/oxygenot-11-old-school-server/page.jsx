import Oxygenot11OldSchoolServerKeywordPage, { generateMetadata } from './oxygenot-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot11OldSchoolServerKeywordPage />;
}
