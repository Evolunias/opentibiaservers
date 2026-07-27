import RealMapXanteriaServersKeywordPage, { generateMetadata } from './real-map-xanteria-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapXanteriaServersKeywordPage />;
}
