import Oxygenot14OldSchoolServerKeywordPage, { generateMetadata } from './oxygenot-14-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot14OldSchoolServerKeywordPage />;
}
