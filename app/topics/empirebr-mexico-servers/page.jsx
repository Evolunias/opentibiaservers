import EmpirebrMexicoServersKeywordPage, { generateMetadata } from './empirebr-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrMexicoServersKeywordPage />;
}
