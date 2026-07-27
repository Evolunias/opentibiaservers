import EmpirebrRealMapServerCanadaKeywordPage, { generateMetadata } from './empirebr-real-map-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrRealMapServerCanadaKeywordPage />;
}
