import Oxygenot14RealMapServerKeywordPage, { generateMetadata } from './oxygenot-14-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot14RealMapServerKeywordPage />;
}
