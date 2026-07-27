import BestEmpirebrClientKeywordPage, { generateMetadata } from './best-empirebr-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEmpirebrClientKeywordPage />;
}
