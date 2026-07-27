import CoxaotCustomMapServerMexicoKeywordPage, { generateMetadata } from './coxaot-custom-map-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotCustomMapServerMexicoKeywordPage />;
}
