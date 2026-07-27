import MidhemOldSchoolServerCanadaKeywordPage, { generateMetadata } from './midhem-old-school-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemOldSchoolServerCanadaKeywordPage />;
}
