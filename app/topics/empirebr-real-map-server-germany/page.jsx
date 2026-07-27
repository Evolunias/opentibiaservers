import EmpirebrRealMapServerGermanyKeywordPage, { generateMetadata } from './empirebr-real-map-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrRealMapServerGermanyKeywordPage />;
}
