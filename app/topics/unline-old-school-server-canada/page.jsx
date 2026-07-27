import UnlineOldSchoolServerCanadaKeywordPage, { generateMetadata } from './unline-old-school-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineOldSchoolServerCanadaKeywordPage />;
}
