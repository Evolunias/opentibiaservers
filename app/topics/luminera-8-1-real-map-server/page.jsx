import Luminera81RealMapServerKeywordPage, { generateMetadata } from './luminera-8-1-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera81RealMapServerKeywordPage />;
}
