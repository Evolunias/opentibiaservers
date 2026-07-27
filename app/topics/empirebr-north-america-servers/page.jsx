import EmpirebrNorthAmericaServersKeywordPage, { generateMetadata } from './empirebr-north-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrNorthAmericaServersKeywordPage />;
}
