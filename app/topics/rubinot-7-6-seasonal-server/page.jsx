import Rubinot76SeasonalServerKeywordPage, { generateMetadata } from './rubinot-7-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot76SeasonalServerKeywordPage />;
}
