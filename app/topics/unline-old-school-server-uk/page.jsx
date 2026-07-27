import UnlineOldSchoolServerUkKeywordPage, { generateMetadata } from './unline-old-school-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineOldSchoolServerUkKeywordPage />;
}
