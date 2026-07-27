import NewEmpirebrOtsKeywordPage, { generateMetadata } from './new-empirebr-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEmpirebrOtsKeywordPage />;
}
