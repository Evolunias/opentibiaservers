import NoResetEmpirebrLoginKeywordPage, { generateMetadata } from './no-reset-empirebr-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetEmpirebrLoginKeywordPage />;
}
