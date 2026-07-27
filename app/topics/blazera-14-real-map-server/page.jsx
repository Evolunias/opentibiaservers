import Blazera14RealMapServerKeywordPage, { generateMetadata } from './blazera-14-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera14RealMapServerKeywordPage />;
}
