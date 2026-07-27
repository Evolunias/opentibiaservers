import MidhemOldSchoolServerUkKeywordPage, { generateMetadata } from './midhem-old-school-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemOldSchoolServerUkKeywordPage />;
}
