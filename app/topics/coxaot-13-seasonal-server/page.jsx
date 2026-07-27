import Coxaot13SeasonalServerKeywordPage, { generateMetadata } from './coxaot-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot13SeasonalServerKeywordPage />;
}
