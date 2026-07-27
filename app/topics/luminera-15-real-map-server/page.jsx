import Luminera15RealMapServerKeywordPage, { generateMetadata } from './luminera-15-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera15RealMapServerKeywordPage />;
}
