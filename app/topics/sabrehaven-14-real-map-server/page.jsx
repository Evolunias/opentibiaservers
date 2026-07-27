import Sabrehaven14RealMapServerKeywordPage, { generateMetadata } from './sabrehaven-14-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven14RealMapServerKeywordPage />;
}
