import CalmeraOt15CustomMapServerKeywordPage, { generateMetadata } from './calmera-ot-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOt15CustomMapServerKeywordPage />;
}
