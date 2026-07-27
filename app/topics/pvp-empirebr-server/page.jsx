import PvpEmpirebrServerKeywordPage, { generateMetadata } from './pvp-empirebr-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEmpirebrServerKeywordPage />;
}
