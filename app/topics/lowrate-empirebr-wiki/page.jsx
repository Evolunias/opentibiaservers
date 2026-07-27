import LowrateEmpirebrWikiKeywordPage, { generateMetadata } from './lowrate-empirebr-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateEmpirebrWikiKeywordPage />;
}
