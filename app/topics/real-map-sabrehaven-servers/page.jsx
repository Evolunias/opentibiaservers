import RealMapSabrehavenServersKeywordPage, { generateMetadata } from './real-map-sabrehaven-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSabrehavenServersKeywordPage />;
}
