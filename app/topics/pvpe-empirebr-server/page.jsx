import PvpeEmpirebrServerKeywordPage, { generateMetadata } from './pvpe-empirebr-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeEmpirebrServerKeywordPage />;
}
