import CustomEmpirebrOtsKeywordPage, { generateMetadata } from './custom-empirebr-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEmpirebrOtsKeywordPage />;
}
