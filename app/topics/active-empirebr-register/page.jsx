import ActiveEmpirebrRegisterKeywordPage, { generateMetadata } from './active-empirebr-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEmpirebrRegisterKeywordPage />;
}
