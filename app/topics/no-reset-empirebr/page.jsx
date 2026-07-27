import NoResetEmpirebrKeywordPage, { generateMetadata } from './no-reset-empirebr';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetEmpirebrKeywordPage />;
}
