import EmpirebrNorthAmericaServerKeywordPage, { generateMetadata } from './empirebr-north-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrNorthAmericaServerKeywordPage />;
}
