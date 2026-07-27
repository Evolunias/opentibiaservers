import EmpirebrLatinAmericaServerKeywordPage, { generateMetadata } from './empirebr-latin-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrLatinAmericaServerKeywordPage />;
}
