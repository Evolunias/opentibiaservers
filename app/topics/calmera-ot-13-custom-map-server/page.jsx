import CalmeraOt13CustomMapServerKeywordPage, { generateMetadata } from './calmera-ot-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOt13CustomMapServerKeywordPage />;
}
