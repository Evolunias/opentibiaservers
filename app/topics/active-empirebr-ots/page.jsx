import ActiveEmpirebrOtsKeywordPage, { generateMetadata } from './active-empirebr-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEmpirebrOtsKeywordPage />;
}
