import Coxaot100SeasonalServerKeywordPage, { generateMetadata } from './coxaot-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot100SeasonalServerKeywordPage />;
}
