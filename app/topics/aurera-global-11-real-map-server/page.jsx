import AureraGlobal11RealMapServerKeywordPage, { generateMetadata } from './aurera-global-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobal11RealMapServerKeywordPage />;
}
