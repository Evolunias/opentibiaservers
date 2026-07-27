import Sabrehaven15RealMapServerKeywordPage, { generateMetadata } from './sabrehaven-15-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven15RealMapServerKeywordPage />;
}
