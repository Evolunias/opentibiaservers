import ActiveEmpirebrServerKeywordPage, { generateMetadata } from './active-empirebr-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEmpirebrServerKeywordPage />;
}
