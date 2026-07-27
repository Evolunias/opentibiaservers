import Coxaot96SeasonalServerKeywordPage, { generateMetadata } from './coxaot-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot96SeasonalServerKeywordPage />;
}
