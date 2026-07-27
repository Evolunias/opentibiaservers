import SabrehavenCustomMapServerUsaKeywordPage, { generateMetadata } from './sabrehaven-custom-map-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenCustomMapServerUsaKeywordPage />;
}
