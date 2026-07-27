import TibiameOldSchoolServerGermanyKeywordPage, { generateMetadata } from './tibiame-old-school-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameOldSchoolServerGermanyKeywordPage />;
}
