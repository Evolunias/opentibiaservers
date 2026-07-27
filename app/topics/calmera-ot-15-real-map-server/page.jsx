import CalmeraOt15RealMapServerKeywordPage, { generateMetadata } from './calmera-ot-15-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOt15RealMapServerKeywordPage />;
}
