import Empirebr96SeasonalServerKeywordPage, { generateMetadata } from './empirebr-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Empirebr96SeasonalServerKeywordPage />;
}
