import Luminera13RealMapServerKeywordPage, { generateMetadata } from './luminera-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera13RealMapServerKeywordPage />;
}
