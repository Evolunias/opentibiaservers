import Empirebr11SeasonalServerKeywordPage, { generateMetadata } from './empirebr-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Empirebr11SeasonalServerKeywordPage />;
}
