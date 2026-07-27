import RealMapEmpirebrKeywordPage, { generateMetadata } from './real-map-empirebr';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapEmpirebrKeywordPage />;
}
