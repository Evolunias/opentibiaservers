import Cyntara13SeasonalServerKeywordPage, { generateMetadata } from './cyntara-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara13SeasonalServerKeywordPage />;
}
