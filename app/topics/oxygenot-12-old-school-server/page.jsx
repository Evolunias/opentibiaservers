import Oxygenot12OldSchoolServerKeywordPage, { generateMetadata } from './oxygenot-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot12OldSchoolServerKeywordPage />;
}
