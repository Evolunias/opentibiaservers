import RealMapEmpirebrServerKeywordPage, { generateMetadata } from './real-map-empirebr-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapEmpirebrServerKeywordPage />;
}
