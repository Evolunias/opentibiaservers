import Coxaot80SeasonalServerKeywordPage, { generateMetadata } from './coxaot-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot80SeasonalServerKeywordPage />;
}
