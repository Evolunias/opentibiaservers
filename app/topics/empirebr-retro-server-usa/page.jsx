import EmpirebrRetroServerUsaKeywordPage, { generateMetadata } from './empirebr-retro-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrRetroServerUsaKeywordPage />;
}
