import Luminera76RealMapServerKeywordPage, { generateMetadata } from './luminera-7-6-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera76RealMapServerKeywordPage />;
}
