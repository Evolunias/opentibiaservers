import Realera14RealMapServerKeywordPage, { generateMetadata } from './realera-14-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera14RealMapServerKeywordPage />;
}
