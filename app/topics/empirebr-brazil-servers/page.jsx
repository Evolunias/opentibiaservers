import EmpirebrBrazilServersKeywordPage, { generateMetadata } from './empirebr-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrBrazilServersKeywordPage />;
}
