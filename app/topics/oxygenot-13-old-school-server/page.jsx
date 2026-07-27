import Oxygenot13OldSchoolServerKeywordPage, { generateMetadata } from './oxygenot-13-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot13OldSchoolServerKeywordPage />;
}
