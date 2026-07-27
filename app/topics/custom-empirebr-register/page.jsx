import CustomEmpirebrRegisterKeywordPage, { generateMetadata } from './custom-empirebr-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEmpirebrRegisterKeywordPage />;
}
