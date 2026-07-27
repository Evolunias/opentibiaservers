import AmeriaOldSchoolServerGermanyKeywordPage, { generateMetadata } from './ameria-old-school-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaOldSchoolServerGermanyKeywordPage />;
}
