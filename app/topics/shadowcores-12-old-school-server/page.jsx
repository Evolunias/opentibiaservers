import Shadowcores12OldSchoolServerKeywordPage, { generateMetadata } from './shadowcores-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores12OldSchoolServerKeywordPage />;
}
