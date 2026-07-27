import HighrateEmpirebrLoginKeywordPage, { generateMetadata } from './highrate-empirebr-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateEmpirebrLoginKeywordPage />;
}
