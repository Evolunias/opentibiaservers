import CoxaotSeasonalServerBrazilKeywordPage, { generateMetadata } from './coxaot-seasonal-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotSeasonalServerBrazilKeywordPage />;
}
