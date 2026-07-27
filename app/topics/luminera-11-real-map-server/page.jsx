import Luminera11RealMapServerKeywordPage, { generateMetadata } from './luminera-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera11RealMapServerKeywordPage />;
}
