import HighrateEmpirebrGuideKeywordPage, { generateMetadata } from './highrate-empirebr-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateEmpirebrGuideKeywordPage />;
}
