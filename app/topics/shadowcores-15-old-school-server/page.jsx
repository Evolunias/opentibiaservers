import Shadowcores15OldSchoolServerKeywordPage, { generateMetadata } from './shadowcores-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores15OldSchoolServerKeywordPage />;
}
