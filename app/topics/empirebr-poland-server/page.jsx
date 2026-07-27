import EmpirebrPolandServerKeywordPage, { generateMetadata } from './empirebr-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrPolandServerKeywordPage />;
}
