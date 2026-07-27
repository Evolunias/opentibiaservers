import TopEmpirebrKeywordPage, { generateMetadata } from './top-empirebr';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEmpirebrKeywordPage />;
}
