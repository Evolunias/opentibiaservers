import RealestaRealMapServersCanadaKeywordPage, { generateMetadata } from './realesta-real-map-servers-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaRealMapServersCanadaKeywordPage />;
}
