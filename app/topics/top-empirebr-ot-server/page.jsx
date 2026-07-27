import TopEmpirebrOtServerKeywordPage, { generateMetadata } from './top-empirebr-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEmpirebrOtServerKeywordPage />;
}
