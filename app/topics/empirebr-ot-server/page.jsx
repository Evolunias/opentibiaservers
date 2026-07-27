import EmpirebrOtServerKeywordPage, { generateMetadata } from './empirebr-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrOtServerKeywordPage />;
}
