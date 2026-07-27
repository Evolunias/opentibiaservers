import Cyntara81SeasonalServerKeywordPage, { generateMetadata } from './cyntara-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara81SeasonalServerKeywordPage />;
}
