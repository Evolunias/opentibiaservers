import Cyntara100SeasonalServerKeywordPage, { generateMetadata } from './cyntara-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara100SeasonalServerKeywordPage />;
}
