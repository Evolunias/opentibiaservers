import CurrentEmpirebrServerKeywordPage, { generateMetadata } from './current-empirebr-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEmpirebrServerKeywordPage />;
}
