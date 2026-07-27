import HighExpEmpirebrServerKeywordPage, { generateMetadata } from './high-exp-empirebr-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpEmpirebrServerKeywordPage />;
}
