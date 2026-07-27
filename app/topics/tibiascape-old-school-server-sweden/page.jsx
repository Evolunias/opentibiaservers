import TibiascapeOldSchoolServerSwedenKeywordPage, { generateMetadata } from './tibiascape-old-school-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeOldSchoolServerSwedenKeywordPage />;
}
