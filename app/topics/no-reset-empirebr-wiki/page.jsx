import NoResetEmpirebrWikiKeywordPage, { generateMetadata } from './no-reset-empirebr-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetEmpirebrWikiKeywordPage />;
}
