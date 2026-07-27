import Coxaot84SeasonalServerKeywordPage, { generateMetadata } from './coxaot-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot84SeasonalServerKeywordPage />;
}
