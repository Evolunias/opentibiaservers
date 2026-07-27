import CurrentEmpirebrWikiKeywordPage, { generateMetadata } from './current-empirebr-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEmpirebrWikiKeywordPage />;
}
