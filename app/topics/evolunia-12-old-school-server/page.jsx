import Evolunia12OldSchoolServerKeywordPage, { generateMetadata } from './evolunia-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia12OldSchoolServerKeywordPage />;
}
