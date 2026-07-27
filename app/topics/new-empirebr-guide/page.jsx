import NewEmpirebrGuideKeywordPage, { generateMetadata } from './new-empirebr-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEmpirebrGuideKeywordPage />;
}
