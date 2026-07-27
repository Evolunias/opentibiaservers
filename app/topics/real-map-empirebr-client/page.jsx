import RealMapEmpirebrClientKeywordPage, { generateMetadata } from './real-map-empirebr-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapEmpirebrClientKeywordPage />;
}
