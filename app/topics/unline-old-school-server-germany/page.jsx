import UnlineOldSchoolServerGermanyKeywordPage, { generateMetadata } from './unline-old-school-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineOldSchoolServerGermanyKeywordPage />;
}
