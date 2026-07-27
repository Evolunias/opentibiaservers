import EmpirebrSeasonalServerUkKeywordPage, { generateMetadata } from './empirebr-seasonal-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrSeasonalServerUkKeywordPage />;
}
