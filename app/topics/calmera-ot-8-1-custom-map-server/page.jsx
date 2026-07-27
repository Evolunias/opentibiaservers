import CalmeraOt81CustomMapServerKeywordPage, { generateMetadata } from './calmera-ot-8-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOt81CustomMapServerKeywordPage />;
}
