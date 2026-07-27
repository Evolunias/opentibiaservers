import CalmeraOt11RealMapServerKeywordPage, { generateMetadata } from './calmera-ot-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOt11RealMapServerKeywordPage />;
}
