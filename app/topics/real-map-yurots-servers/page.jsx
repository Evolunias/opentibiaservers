import RealMapYurotsServersKeywordPage, { generateMetadata } from './real-map-yurots-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapYurotsServersKeywordPage />;
}
