import Coxaot12SeasonalServerKeywordPage, { generateMetadata } from './coxaot-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot12SeasonalServerKeywordPage />;
}
