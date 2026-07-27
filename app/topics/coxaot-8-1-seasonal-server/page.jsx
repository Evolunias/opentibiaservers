import Coxaot81SeasonalServerKeywordPage, { generateMetadata } from './coxaot-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot81SeasonalServerKeywordPage />;
}
