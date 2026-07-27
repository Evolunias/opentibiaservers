import SabrehavenCustomMapServerGermanyKeywordPage, { generateMetadata } from './sabrehaven-custom-map-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenCustomMapServerGermanyKeywordPage />;
}
