import BestEmpirebrOtsKeywordPage, { generateMetadata } from './best-empirebr-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEmpirebrOtsKeywordPage />;
}
