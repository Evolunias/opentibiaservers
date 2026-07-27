import SabrehavenRealMapServerCanadaKeywordPage, { generateMetadata } from './sabrehaven-real-map-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenRealMapServerCanadaKeywordPage />;
}
