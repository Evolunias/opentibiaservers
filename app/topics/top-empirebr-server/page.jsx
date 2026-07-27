import TopEmpirebrServerKeywordPage, { generateMetadata } from './top-empirebr-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEmpirebrServerKeywordPage />;
}
