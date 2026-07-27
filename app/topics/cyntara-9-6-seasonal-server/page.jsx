import Cyntara96SeasonalServerKeywordPage, { generateMetadata } from './cyntara-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara96SeasonalServerKeywordPage />;
}
