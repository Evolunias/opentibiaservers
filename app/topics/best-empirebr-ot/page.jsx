import BestEmpirebrOtKeywordPage, { generateMetadata } from './best-empirebr-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEmpirebrOtKeywordPage />;
}
