import LowrateEmpirebrRegisterKeywordPage, { generateMetadata } from './lowrate-empirebr-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateEmpirebrRegisterKeywordPage />;
}
