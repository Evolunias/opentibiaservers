import Empirebr13SeasonalServerKeywordPage, { generateMetadata } from './empirebr-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Empirebr13SeasonalServerKeywordPage />;
}
