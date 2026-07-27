import Luminera74RealMapServerKeywordPage, { generateMetadata } from './luminera-7-4-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera74RealMapServerKeywordPage />;
}
