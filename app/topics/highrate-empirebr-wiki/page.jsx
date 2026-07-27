import HighrateEmpirebrWikiKeywordPage, { generateMetadata } from './highrate-empirebr-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateEmpirebrWikiKeywordPage />;
}
