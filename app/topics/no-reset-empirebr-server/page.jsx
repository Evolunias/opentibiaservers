import NoResetEmpirebrServerKeywordPage, { generateMetadata } from './no-reset-empirebr-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetEmpirebrServerKeywordPage />;
}
