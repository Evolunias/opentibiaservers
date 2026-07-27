import OriginaltibiaCustomMapServerUkKeywordPage, { generateMetadata } from './originaltibia-custom-map-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaCustomMapServerUkKeywordPage />;
}
