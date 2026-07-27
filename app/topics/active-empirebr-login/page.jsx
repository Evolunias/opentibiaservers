import ActiveEmpirebrLoginKeywordPage, { generateMetadata } from './active-empirebr-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEmpirebrLoginKeywordPage />;
}
