import MidhemRealMapServerUkKeywordPage, { generateMetadata } from './midhem-real-map-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemRealMapServerUkKeywordPage />;
}
