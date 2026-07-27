import Rubinot81SeasonalServerKeywordPage, { generateMetadata } from './rubinot-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot81SeasonalServerKeywordPage />;
}
