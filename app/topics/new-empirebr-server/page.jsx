import NewEmpirebrServerKeywordPage, { generateMetadata } from './new-empirebr-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEmpirebrServerKeywordPage />;
}
