import NewEmpirebrRegisterKeywordPage, { generateMetadata } from './new-empirebr-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEmpirebrRegisterKeywordPage />;
}
