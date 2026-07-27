import Rubinot84SeasonalServerKeywordPage, { generateMetadata } from './rubinot-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot84SeasonalServerKeywordPage />;
}
