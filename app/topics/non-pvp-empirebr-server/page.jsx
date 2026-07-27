import NonPvpEmpirebrServerKeywordPage, { generateMetadata } from './non-pvp-empirebr-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpEmpirebrServerKeywordPage />;
}
