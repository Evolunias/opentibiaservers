import ClassicusRealMapServerGermanyKeywordPage, { generateMetadata } from './classicus-real-map-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusRealMapServerGermanyKeywordPage />;
}
