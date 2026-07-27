import EmpirebrCustomMapServerSwedenKeywordPage, { generateMetadata } from './empirebr-custom-map-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrCustomMapServerSwedenKeywordPage />;
}
