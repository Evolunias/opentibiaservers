import LowrateEmpirebrKeywordPage, { generateMetadata } from './lowrate-empirebr';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateEmpirebrKeywordPage />;
}
