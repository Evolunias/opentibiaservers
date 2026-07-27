import Coxaot14SeasonalServerKeywordPage, { generateMetadata } from './coxaot-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot14SeasonalServerKeywordPage />;
}
