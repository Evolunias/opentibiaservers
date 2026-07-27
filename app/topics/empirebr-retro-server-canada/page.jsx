import EmpirebrRetroServerCanadaKeywordPage, { generateMetadata } from './empirebr-retro-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrRetroServerCanadaKeywordPage />;
}
