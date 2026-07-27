import BestEmpirebrGuideKeywordPage, { generateMetadata } from './best-empirebr-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEmpirebrGuideKeywordPage />;
}
