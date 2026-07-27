import CalmeraOt12RealMapServerKeywordPage, { generateMetadata } from './calmera-ot-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOt12RealMapServerKeywordPage />;
}
