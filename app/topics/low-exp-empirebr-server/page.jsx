import LowExpEmpirebrServerKeywordPage, { generateMetadata } from './low-exp-empirebr-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpEmpirebrServerKeywordPage />;
}
