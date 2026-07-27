import Cyntara80SeasonalServerKeywordPage, { generateMetadata } from './cyntara-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara80SeasonalServerKeywordPage />;
}
