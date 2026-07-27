import OfficialEmpirebrWikiKeywordPage, { generateMetadata } from './official-empirebr-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEmpirebrWikiKeywordPage />;
}
