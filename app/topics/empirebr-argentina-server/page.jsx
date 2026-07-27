import EmpirebrArgentinaServerKeywordPage, { generateMetadata } from './empirebr-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrArgentinaServerKeywordPage />;
}
