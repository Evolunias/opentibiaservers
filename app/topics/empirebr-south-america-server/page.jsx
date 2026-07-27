import EmpirebrSouthAmericaServerKeywordPage, { generateMetadata } from './empirebr-south-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrSouthAmericaServerKeywordPage />;
}
