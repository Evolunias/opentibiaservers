import CustomEmpirebrServerKeywordPage, { generateMetadata } from './custom-empirebr-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEmpirebrServerKeywordPage />;
}
