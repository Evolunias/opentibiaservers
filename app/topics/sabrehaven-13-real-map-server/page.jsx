import Sabrehaven13RealMapServerKeywordPage, { generateMetadata } from './sabrehaven-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven13RealMapServerKeywordPage />;
}
