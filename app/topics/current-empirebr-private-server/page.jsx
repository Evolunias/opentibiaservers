import CurrentEmpirebrPrivateServerKeywordPage, { generateMetadata } from './current-empirebr-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEmpirebrPrivateServerKeywordPage />;
}
