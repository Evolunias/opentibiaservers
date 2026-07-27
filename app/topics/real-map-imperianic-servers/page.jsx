import RealMapImperianicServersKeywordPage, { generateMetadata } from './real-map-imperianic-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapImperianicServersKeywordPage />;
}
