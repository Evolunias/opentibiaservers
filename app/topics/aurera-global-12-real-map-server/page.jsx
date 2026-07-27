import AureraGlobal12RealMapServerKeywordPage, { generateMetadata } from './aurera-global-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobal12RealMapServerKeywordPage />;
}
