import BestEmpirebrWikiKeywordPage, { generateMetadata } from './best-empirebr-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEmpirebrWikiKeywordPage />;
}
