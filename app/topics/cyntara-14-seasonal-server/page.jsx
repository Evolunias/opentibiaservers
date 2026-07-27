import Cyntara14SeasonalServerKeywordPage, { generateMetadata } from './cyntara-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara14SeasonalServerKeywordPage />;
}
