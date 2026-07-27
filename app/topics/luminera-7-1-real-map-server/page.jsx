import Luminera71RealMapServerKeywordPage, { generateMetadata } from './luminera-7-1-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera71RealMapServerKeywordPage />;
}
