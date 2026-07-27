import CurrentEmpirebrGuideKeywordPage, { generateMetadata } from './current-empirebr-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEmpirebrGuideKeywordPage />;
}
