import EmpirebrRetroServerMexicoKeywordPage, { generateMetadata } from './empirebr-retro-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrRetroServerMexicoKeywordPage />;
}
