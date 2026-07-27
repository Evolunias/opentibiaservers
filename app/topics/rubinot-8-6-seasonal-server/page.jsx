import Rubinot86SeasonalServerKeywordPage, { generateMetadata } from './rubinot-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot86SeasonalServerKeywordPage />;
}
