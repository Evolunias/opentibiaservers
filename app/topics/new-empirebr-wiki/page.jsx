import NewEmpirebrWikiKeywordPage, { generateMetadata } from './new-empirebr-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEmpirebrWikiKeywordPage />;
}
