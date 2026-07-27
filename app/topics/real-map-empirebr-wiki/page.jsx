import RealMapEmpirebrWikiKeywordPage, { generateMetadata } from './real-map-empirebr-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapEmpirebrWikiKeywordPage />;
}
