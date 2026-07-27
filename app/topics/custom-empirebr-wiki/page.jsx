import CustomEmpirebrWikiKeywordPage, { generateMetadata } from './custom-empirebr-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEmpirebrWikiKeywordPage />;
}
