import Coxaot71SeasonalServerKeywordPage, { generateMetadata } from './coxaot-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot71SeasonalServerKeywordPage />;
}
