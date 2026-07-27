import NewEmpirebrPrivateServerKeywordPage, { generateMetadata } from './new-empirebr-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEmpirebrPrivateServerKeywordPage />;
}
