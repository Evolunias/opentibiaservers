import Cyntara11SeasonalServerKeywordPage, { generateMetadata } from './cyntara-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara11SeasonalServerKeywordPage />;
}
