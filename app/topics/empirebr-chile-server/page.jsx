import EmpirebrChileServerKeywordPage, { generateMetadata } from './empirebr-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrChileServerKeywordPage />;
}
