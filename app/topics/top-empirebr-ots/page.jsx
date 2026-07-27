import TopEmpirebrOtsKeywordPage, { generateMetadata } from './top-empirebr-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEmpirebrOtsKeywordPage />;
}
