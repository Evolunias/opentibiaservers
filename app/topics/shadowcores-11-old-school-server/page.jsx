import Shadowcores11OldSchoolServerKeywordPage, { generateMetadata } from './shadowcores-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores11OldSchoolServerKeywordPage />;
}
