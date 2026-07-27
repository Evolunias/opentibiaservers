import LowrateEmpirebrGuideKeywordPage, { generateMetadata } from './lowrate-empirebr-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateEmpirebrGuideKeywordPage />;
}
