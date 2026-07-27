import ActiveEmpirebrWikiKeywordPage, { generateMetadata } from './active-empirebr-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEmpirebrWikiKeywordPage />;
}
