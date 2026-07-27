import RealMapServersCanadaKeywordPage, { generateMetadata } from './real-map-servers-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapServersCanadaKeywordPage />;
}
