import Cyntara71SeasonalServerKeywordPage, { generateMetadata } from './cyntara-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara71SeasonalServerKeywordPage />;
}
