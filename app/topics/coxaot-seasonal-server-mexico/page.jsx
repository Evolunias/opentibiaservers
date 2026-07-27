import CoxaotSeasonalServerMexicoKeywordPage, { generateMetadata } from './coxaot-seasonal-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotSeasonalServerMexicoKeywordPage />;
}
