import Sabrehaven71RealMapServerKeywordPage, { generateMetadata } from './sabrehaven-7-1-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven71RealMapServerKeywordPage />;
}
