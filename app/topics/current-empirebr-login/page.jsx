import CurrentEmpirebrLoginKeywordPage, { generateMetadata } from './current-empirebr-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEmpirebrLoginKeywordPage />;
}
