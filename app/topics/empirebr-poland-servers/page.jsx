import EmpirebrPolandServersKeywordPage, { generateMetadata } from './empirebr-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrPolandServersKeywordPage />;
}
