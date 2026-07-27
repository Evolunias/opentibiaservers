import EmpirebrRetroServerUkKeywordPage, { generateMetadata } from './empirebr-retro-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrRetroServerUkKeywordPage />;
}
