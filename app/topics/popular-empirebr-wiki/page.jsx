import PopularEmpirebrWikiKeywordPage, { generateMetadata } from './popular-empirebr-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEmpirebrWikiKeywordPage />;
}
