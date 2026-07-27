import EvoEmpirebrServerKeywordPage, { generateMetadata } from './evo-empirebr-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoEmpirebrServerKeywordPage />;
}
