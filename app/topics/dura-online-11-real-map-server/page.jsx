import DuraOnline11RealMapServerKeywordPage, { generateMetadata } from './dura-online-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline11RealMapServerKeywordPage />;
}
