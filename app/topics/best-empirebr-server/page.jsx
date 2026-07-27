import BestEmpirebrServerKeywordPage, { generateMetadata } from './best-empirebr-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEmpirebrServerKeywordPage />;
}
