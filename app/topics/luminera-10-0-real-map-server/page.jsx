import Luminera100RealMapServerKeywordPage, { generateMetadata } from './luminera-10-0-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera100RealMapServerKeywordPage />;
}
