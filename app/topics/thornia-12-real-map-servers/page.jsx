import Thornia12RealMapServersKeywordPage, { generateMetadata } from './thornia-12-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia12RealMapServersKeywordPage />;
}
