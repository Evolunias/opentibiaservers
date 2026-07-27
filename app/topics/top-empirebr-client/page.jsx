import TopEmpirebrClientKeywordPage, { generateMetadata } from './top-empirebr-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEmpirebrClientKeywordPage />;
}
