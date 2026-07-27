import EmpirebrRealMapServerBrazilKeywordPage, { generateMetadata } from './empirebr-real-map-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrRealMapServerBrazilKeywordPage />;
}
