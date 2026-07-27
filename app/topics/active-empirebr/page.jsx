import ActiveEmpirebrKeywordPage, { generateMetadata } from './active-empirebr';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEmpirebrKeywordPage />;
}
