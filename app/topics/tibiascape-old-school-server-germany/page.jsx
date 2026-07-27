import TibiascapeOldSchoolServerGermanyKeywordPage, { generateMetadata } from './tibiascape-old-school-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeOldSchoolServerGermanyKeywordPage />;
}
