import EmpirebrRetroServerArgentinaKeywordPage, { generateMetadata } from './empirebr-retro-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrRetroServerArgentinaKeywordPage />;
}
