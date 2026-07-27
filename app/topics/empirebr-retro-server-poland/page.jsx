import EmpirebrRetroServerPolandKeywordPage, { generateMetadata } from './empirebr-retro-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrRetroServerPolandKeywordPage />;
}
