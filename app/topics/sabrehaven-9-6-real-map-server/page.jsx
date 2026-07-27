import Sabrehaven96RealMapServerKeywordPage, { generateMetadata } from './sabrehaven-9-6-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven96RealMapServerKeywordPage />;
}
