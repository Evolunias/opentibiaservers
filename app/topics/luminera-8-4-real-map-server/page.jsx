import Luminera84RealMapServerKeywordPage, { generateMetadata } from './luminera-8-4-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera84RealMapServerKeywordPage />;
}
