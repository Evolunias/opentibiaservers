import CurrentEmpirebrRegisterKeywordPage, { generateMetadata } from './current-empirebr-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEmpirebrRegisterKeywordPage />;
}
