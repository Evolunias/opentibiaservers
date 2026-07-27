import Cyntara84SeasonalServerKeywordPage, { generateMetadata } from './cyntara-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara84SeasonalServerKeywordPage />;
}
