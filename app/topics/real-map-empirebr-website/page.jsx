import RealMapEmpirebrWebsiteKeywordPage, { generateMetadata } from './real-map-empirebr-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapEmpirebrWebsiteKeywordPage />;
}
