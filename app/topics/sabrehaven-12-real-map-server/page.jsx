import Sabrehaven12RealMapServerKeywordPage, { generateMetadata } from './sabrehaven-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven12RealMapServerKeywordPage />;
}
