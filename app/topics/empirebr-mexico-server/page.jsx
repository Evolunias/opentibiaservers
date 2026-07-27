import EmpirebrMexicoServerKeywordPage, { generateMetadata } from './empirebr-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrMexicoServerKeywordPage />;
}
