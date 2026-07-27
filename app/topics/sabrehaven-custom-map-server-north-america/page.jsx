import SabrehavenCustomMapServerNorthAmericaKeywordPage, { generateMetadata } from './sabrehaven-custom-map-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenCustomMapServerNorthAmericaKeywordPage />;
}
