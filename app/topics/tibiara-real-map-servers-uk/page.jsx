import TibiaraRealMapServersUkKeywordPage, { generateMetadata } from './tibiara-real-map-servers-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraRealMapServersUkKeywordPage />;
}
