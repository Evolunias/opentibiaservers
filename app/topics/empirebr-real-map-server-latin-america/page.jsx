import EmpirebrRealMapServerLatinAmericaKeywordPage, { generateMetadata } from './empirebr-real-map-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrRealMapServerLatinAmericaKeywordPage />;
}
