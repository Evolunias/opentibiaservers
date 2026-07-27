import Cyntara12SeasonalServerKeywordPage, { generateMetadata } from './cyntara-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara12SeasonalServerKeywordPage />;
}
