import EmpirebrLatinAmericaServersKeywordPage, { generateMetadata } from './empirebr-latin-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrLatinAmericaServersKeywordPage />;
}
