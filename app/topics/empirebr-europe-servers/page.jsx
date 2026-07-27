import EmpirebrEuropeServersKeywordPage, { generateMetadata } from './empirebr-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrEuropeServersKeywordPage />;
}
