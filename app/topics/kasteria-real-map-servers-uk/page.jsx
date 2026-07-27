import KasteriaRealMapServersUkKeywordPage, { generateMetadata } from './kasteria-real-map-servers-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaRealMapServersUkKeywordPage />;
}
