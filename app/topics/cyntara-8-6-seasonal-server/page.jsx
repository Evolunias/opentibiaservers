import Cyntara86SeasonalServerKeywordPage, { generateMetadata } from './cyntara-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara86SeasonalServerKeywordPage />;
}
