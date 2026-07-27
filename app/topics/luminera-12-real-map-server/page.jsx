import Luminera12RealMapServerKeywordPage, { generateMetadata } from './luminera-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera12RealMapServerKeywordPage />;
}
