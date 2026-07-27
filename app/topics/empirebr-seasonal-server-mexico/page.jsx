import EmpirebrSeasonalServerMexicoKeywordPage, { generateMetadata } from './empirebr-seasonal-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrSeasonalServerMexicoKeywordPage />;
}
