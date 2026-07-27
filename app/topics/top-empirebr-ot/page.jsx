import TopEmpirebrOtKeywordPage, { generateMetadata } from './top-empirebr-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEmpirebrOtKeywordPage />;
}
