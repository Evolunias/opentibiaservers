import Rubinot11SeasonalServerKeywordPage, { generateMetadata } from './rubinot-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot11SeasonalServerKeywordPage />;
}
