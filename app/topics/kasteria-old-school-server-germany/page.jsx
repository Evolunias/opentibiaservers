import KasteriaOldSchoolServerGermanyKeywordPage, { generateMetadata } from './kasteria-old-school-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaOldSchoolServerGermanyKeywordPage />;
}
