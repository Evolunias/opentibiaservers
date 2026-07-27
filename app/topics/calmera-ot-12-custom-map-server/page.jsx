import CalmeraOt12CustomMapServerKeywordPage, { generateMetadata } from './calmera-ot-12-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOt12CustomMapServerKeywordPage />;
}
