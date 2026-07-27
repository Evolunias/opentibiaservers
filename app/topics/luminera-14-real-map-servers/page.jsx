import Luminera14RealMapServersKeywordPage, { generateMetadata } from './luminera-14-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera14RealMapServersKeywordPage />;
}
