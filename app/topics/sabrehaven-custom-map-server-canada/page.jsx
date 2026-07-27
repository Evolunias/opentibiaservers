import SabrehavenCustomMapServerCanadaKeywordPage, { generateMetadata } from './sabrehaven-custom-map-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenCustomMapServerCanadaKeywordPage />;
}
