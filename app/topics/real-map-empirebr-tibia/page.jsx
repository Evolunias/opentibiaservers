import RealMapEmpirebrTibiaKeywordPage, { generateMetadata } from './real-map-empirebr-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapEmpirebrTibiaKeywordPage />;
}
