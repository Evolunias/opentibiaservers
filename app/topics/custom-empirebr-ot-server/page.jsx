import CustomEmpirebrOtServerKeywordPage, { generateMetadata } from './custom-empirebr-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEmpirebrOtServerKeywordPage />;
}
