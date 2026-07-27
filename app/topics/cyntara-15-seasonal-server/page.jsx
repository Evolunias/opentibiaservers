import Cyntara15SeasonalServerKeywordPage, { generateMetadata } from './cyntara-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara15SeasonalServerKeywordPage />;
}
