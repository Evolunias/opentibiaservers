import FreshStartEmpirebrWikiKeywordPage, { generateMetadata } from './fresh-start-empirebr-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartEmpirebrWikiKeywordPage />;
}
