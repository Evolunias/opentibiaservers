import ActiveEmpirebrOtKeywordPage, { generateMetadata } from './active-empirebr-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEmpirebrOtKeywordPage />;
}
