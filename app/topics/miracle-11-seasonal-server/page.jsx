import Miracle11SeasonalServerKeywordPage, { generateMetadata } from './miracle-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle11SeasonalServerKeywordPage />;
}
