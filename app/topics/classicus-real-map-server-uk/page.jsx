import ClassicusRealMapServerUkKeywordPage, { generateMetadata } from './classicus-real-map-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusRealMapServerUkKeywordPage />;
}
