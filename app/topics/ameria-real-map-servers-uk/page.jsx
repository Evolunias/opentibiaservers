import AmeriaRealMapServersUkKeywordPage, { generateMetadata } from './ameria-real-map-servers-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaRealMapServersUkKeywordPage />;
}
