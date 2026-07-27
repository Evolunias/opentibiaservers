import MidhemOldSchoolServerArgentinaKeywordPage, { generateMetadata } from './midhem-old-school-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemOldSchoolServerArgentinaKeywordPage />;
}
