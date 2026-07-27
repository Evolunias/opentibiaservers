import CalmeraOt11CustomMapServerKeywordPage, { generateMetadata } from './calmera-ot-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOt11CustomMapServerKeywordPage />;
}
