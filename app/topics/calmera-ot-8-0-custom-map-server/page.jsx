import CalmeraOt80CustomMapServerKeywordPage, { generateMetadata } from './calmera-ot-8-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOt80CustomMapServerKeywordPage />;
}
