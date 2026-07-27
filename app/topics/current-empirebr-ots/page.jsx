import CurrentEmpirebrOtsKeywordPage, { generateMetadata } from './current-empirebr-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEmpirebrOtsKeywordPage />;
}
