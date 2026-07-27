import EmpirebrChileServersKeywordPage, { generateMetadata } from './empirebr-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrChileServersKeywordPage />;
}
