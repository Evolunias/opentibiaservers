import Sabrehaven76SeasonalServerKeywordPage, { generateMetadata } from './sabrehaven-7-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven76SeasonalServerKeywordPage />;
}
