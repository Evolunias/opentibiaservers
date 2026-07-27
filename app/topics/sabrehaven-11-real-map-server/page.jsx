import Sabrehaven11RealMapServerKeywordPage, { generateMetadata } from './sabrehaven-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven11RealMapServerKeywordPage />;
}
