import EmpirebrUkServerKeywordPage, { generateMetadata } from './empirebr-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrUkServerKeywordPage />;
}
