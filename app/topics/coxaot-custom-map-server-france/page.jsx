import CoxaotCustomMapServerFranceKeywordPage, { generateMetadata } from './coxaot-custom-map-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotCustomMapServerFranceKeywordPage />;
}
