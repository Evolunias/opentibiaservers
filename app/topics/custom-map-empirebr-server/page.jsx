import CustomMapEmpirebrServerKeywordPage, { generateMetadata } from './custom-map-empirebr-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapEmpirebrServerKeywordPage />;
}
