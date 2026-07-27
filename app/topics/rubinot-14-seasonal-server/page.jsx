import Rubinot14SeasonalServerKeywordPage, { generateMetadata } from './rubinot-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot14SeasonalServerKeywordPage />;
}
